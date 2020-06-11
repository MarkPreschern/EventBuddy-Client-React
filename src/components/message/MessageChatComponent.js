import React from 'react'
import ChatBubbleComponent from "./ChatBubbleComponent";

export default class MessageChatComponent extends React.Component {
    render() {
        return(
            <div className="EB-chatbox">
                <ChatBubbleComponent
                    userId="123"
                    messageUserId="123"/>
                <ChatBubbleComponent
                    userId="123"
                    messageUserId="234"/>
                <ChatBubbleComponent
                    userId="123"
                    messageUserId="123"/>
            </div>
        )
    }
}