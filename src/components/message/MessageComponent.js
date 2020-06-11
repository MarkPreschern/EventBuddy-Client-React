import React from 'react'
import MessageContactListComponent from "./MessageContactListComponent";
import MessageChatComponent from "./MessageChatComponent";
import ChatBubbleComponent from "./ChatBubbleComponent";

export default class MessageComponent extends React.Component {
    render() {
        return (
            <div className="m-2">
                <h3>Your Messages</h3>
                <div className="row">
                <div className="col-3 d-none d-md-inline">
                    <MessageContactListComponent/>
                </div>
                <div className="col-md-9 col-12">
                    <input className="form-control "
                           placeholder="Write your message here"/>
                    <MessageChatComponent/>
                </div>
                </div>
            </div>
        );
    }
}