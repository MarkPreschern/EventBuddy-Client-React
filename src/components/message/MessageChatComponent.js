import React from 'react'
import {connect} from "react-redux";
import MessageChatBubbleComponent from "./MessageChatBubbleComponent";
import ConversationService from "../../services/ConversationService";
import MessageService from "../../services/MessageService";
import {updateAttendee} from "../../actions/AttendeeActions";
import {selectConversation} from "../../actions/ConversationActions";
import {showAlert} from "../../actions/AlertActions";

class MessageChatComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };
    }

    componentDidMount() {
        const pathParts = window.location.pathname.split('/');
        const id = pathParts.pop() || pathParts.pop();
        if (id !== "messages") {
            ConversationService.getConversation(this.props.attendee._id, id).then(data => {
                if (data.hasOwnProperty("message")) {
                    this.props.showAlert(data.message.msgBody);
                } else {
                    data.messages = data.messages.sort((m1, m2) => m1.timestamp > m2.timestamp);
                    this.props.selectConversation(data);
                    this.scrollBottom();
                }
            });
        } else if (this.props.attendee.conversations.length > 0) {
            ConversationService.getConversation(this.props.attendee._id, this.props.attendee.conversations[0]._id).then(data => {
                if (data.hasOwnProperty("message")) {
                    this.props.showAlert(data.message.msgBody);
                } else {
                    this.props.selectConversation(data);
                }
            });
        }
        if(this.props.conversation !== undefined && this.props.conversation.message !== undefined) {
            this.scrollBottom();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollBottom();
    }

    sendMessage = async () => {
        let message = {
            content: this.state.message,
            sender: this.props.attendee._id,
        };
        const data = await MessageService.createMessage(this.props.attendee._id, this.props.conversation._id, message);
        if (data.hasOwnProperty("message")) {
            this.props.showAlert(data.message.msgBody);
        } else {
            message._id = data._id;
            message.sender = {};
            message.sender._id = data.sender;

            // update selected conversation
            let conversation = this.props.conversation;
            conversation.messages.push(message);
            this.props.selectConversation(conversation);
            this.setState({message: ""});

            // update attendee
            let attendee = this.props.attendee;
            attendee.conversations = this.props.attendee.conversations.map(convo => {
                return (convo._id === conversation._id ? conversation : convo)
            });
            this.props.updateAttendee(attendee);

            this.scrollBottom();
        }

    };

    scrollBottom = () => {
        let messages = document.getElementById("EB-message-scroll");
        messages.scrollTop = messages.scrollHeight;
    };

    render() {
        return(
            <span>
                {
                    this.props.conversation !== undefined && this.props.conversation.messages !== undefined &&
                <span>
                <div className="EB-chatbox EB-rounded-corners" id="EB-message-scroll">
                    {
                        this.props.conversation.messages.map(message => {
                            return <MessageChatBubbleComponent key={message._id}
                                                               userId={this.props.attendee._id}
                                                               messageUserId={message.sender._id}
                                                               message={message}/>
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
                }
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
        updateAttendee: (attendee) => {
            dispatch(updateAttendee(attendee))
        },
        selectConversation: (conversation) => {
            dispatch(selectConversation(conversation))
        },
        showAlert: (message) => {
            dispatch(showAlert(message))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(MessageChatComponent);