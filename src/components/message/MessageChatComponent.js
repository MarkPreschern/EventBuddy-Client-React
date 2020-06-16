import React from 'react'
import {connect} from "react-redux";
import MessageChatBubbleComponent from "./MessageChatBubbleComponent";
import ConversationService from "../../services/ConversationService";
import {selectConversation} from "../../actions/ConversationActions";
import MessageService from "../../services/MessageService";

class MessageChatComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };
    }

    componentDidMount() {
        this._isMounted = true;

        const pathParts = window.location.pathname.split('/');
        const id = pathParts.pop() || pathParts.pop();
        ConversationService.getConversation(this.props.attendee._id, id).then(data => {
            if (data.hasOwnProperty("message")) {
                // TODO: error handling
            } else {
                data.messages = data.messages.sort((m1, m2) => m1.timestamp > m2.timestamp);
                data.messages = this.datetime(data.messages);
                this.props.selectConversation(data);
                this.scrollBottom();
            }
        });
        this.scrollBottom();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollBottom();
    }

    sendMessage = async () => {
        let message = {
            content: this.state.message,
            sender: this.props.attendee,
        };
        const data = await MessageService.createMessage(this.props.attendee._id, this.props.conversation._id, message);
        if (data.hasOwnProperty("message")) {
            // TODO: error handling
        } else {
            message._id = data.sender;
            let conversation = this.props.conversation;
            conversation.messages.push(message);
            this.props.selectConversation(conversation);
            this.setState({message: ""});
            this.scrollBottom();
        }

    };

    scrollBottom = () => {
        let messages = document.getElementById("EB-message-scroll");
        messages.scrollTop = messages.scrollHeight;
    };

    datetime = (messages) => {
        let recentDateTime = "";
        messages = messages.map(message => {
            console.log(message.timestamp);
            if (recentDateTime === "") {
                return message;
            }
            return message;
        });
        return messages;
    };

    render() {
        return(
            <span>
                <div className="EB-chatbox EB-rounded-corners" id="EB-message-scroll">
                    {
                        this.props.conversation !== undefined && this.props.conversation.messages !== undefined &&
                        this.props.conversation.messages.map(message => {
                            return <MessageChatBubbleComponent key={message._id} userId={this.props.attendee._id} messageUserId={message.sender._id} message={message}/>
                        })
                    }
                </div>
                <div className="EB-message-form">
                    <input className="form-control EB-message-input"
                           placeholder="Write your message here"
                           value={this.state.message}
                           onChange={(event) => this.setState({message: event.target.value})}/>
                    {
                        this.state.message.length > 0 &&
                        <button className="btn EB-message-button" onClick={() => this.sendMessage()}>
                            <i className="fa fa-arrow-circle-right"/>
                        </button>
                    }
                </div>

            </span>
        )
    }
}

const mapStateToProps = state => ({
    conversation: state.ConversationReducer.conversation,
    attendee: state.AttendeeReducer.attendee
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectConversation: (conversation) => {
            dispatch(selectConversation(conversation))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(MessageChatComponent);