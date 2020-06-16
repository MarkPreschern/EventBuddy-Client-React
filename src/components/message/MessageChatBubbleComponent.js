import React from 'react'

const MessageChatBubbleComponent = (props) =>
    <div className="text-center">
        {
            props.message.datetime !== undefined &&
            <small>{props.message.datetime}</small>
        }
        <div className="row d-flex">
            {
                props.messageUserId === props.userId &&
                <div className="EB-sent-bubble-wrapper">
                    <div className="EB-sent-bubble text-left">
                        {props.message.content}
                    </div>
                </div>
            }
            {
                props.messageUserId !== props.userId &&
                <div className="EB-receive-bubble-wrapper">
                    <div className="EB-receive-bubble text-left">
                        {props.message.content}
                    </div>
                </div>
            }
        </div>
    </div>;

export default MessageChatBubbleComponent;