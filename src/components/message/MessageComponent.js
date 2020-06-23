import React from 'react'
import {connect} from "react-redux";
import {Link, Route, Switch} from "react-router-dom";
import MessageListComponent from "./MessageListComponent";
import MessageChatComponent from "./MessageChatComponent";

class MessageComponent extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.attendee._id !== -1 &&
                    <div className="m-2">
                        {
                            (!this.props.attendee.hasOwnProperty("conversations") || (this.props.attendee.hasOwnProperty("conversations") && this.props.attendee.conversations.length === 0)) ?
                            <div className="row col-12 d-inline text-center mt-3 mb-3">
                                <div>
                                    You don't have any conversations<br/>
                                    <Link to='/event/search/results'>
                                        <button className="btn btn-outline-info">
                                            Click here to browse through recommended events!
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            :
                            <div>
                                <h3>Conversations</h3>
                                <div className="row">
                                    <div className="col-md-3 col-12 d-md-inline EB-contact-list">
                                        <MessageListComponent/>
                                    </div>
                                    <div className="col-md-9 col-12">
                                        <Switch>
                                            <Route path='/attendee/:attendeeId/messages/:conversationId'
                                                   component={MessageChatComponent}/>
                                            <Route path='/attendee/:attendeeId/messages'
                                                   component={MessageChatComponent}/>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        }

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