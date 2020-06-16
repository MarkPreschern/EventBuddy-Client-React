import React from 'react'
import {connect} from "react-redux";
import MessageChatBubbleComponent from "./MessageChatBubbleComponent";
import ConversationService from "../../services/ConversationService";
import {selectConversation} from "../../actions/ConversationActions";

class MessageChatComponent extends React.Component {
    componentDidMount() {
        const pathParts = window.location.pathname.split('/');
        const id = pathParts.pop() || pathParts.pop();
        ConversationService.getConversation(this.props.attendee._id, id).then(data => {
            if (data.hasOwnProperty("message")) {
                // TODO: error handling
            } else {
                this.props.selectConversation(data);
            }
        });
    }

    render() {
        return(
            <div className="EB-chatbox">
                <MessageChatBubbleComponent
                    userId="123"
                    messageUserId="123"/>
                <MessageChatBubbleComponent
                    userId="123"
                    messageUserId="234"/>
                <MessageChatBubbleComponent
                    userId="123"
                    messageUserId="123"/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
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