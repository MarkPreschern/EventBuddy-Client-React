import React from 'react'
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import MessageListComponent from "./MessageListComponent";
import MessageChatComponent from "./MessageChatComponent";

class MessageComponent extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.attendee._id !== -1 &&
                    <div className="m-2">
                        <h3>Messages</h3>
                        <div className="row">
                            <div className="col-3 d-none d-md-inline EB-contact-list">
                                <MessageListComponent/>
                            </div>
                            <div className="col-md-9 col-12">
                                <Route path='/attendee/:attendeeId/messages/:conversationId' component={MessageChatComponent}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    attendee: state.AttendeeReducer.attendee
});

export default connect(mapStateToProps)(MessageComponent);