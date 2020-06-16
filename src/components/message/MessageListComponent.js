import React from 'react'
import {connect} from "react-redux";
import MessageCardComponent from "./MessageCardComponent";

class MessageListComponent extends React.Component {
    render(){
        return(
            <div>
                {this.props.attendee.hasOwnProperty("conversations") &&
                 this.props.attendee.conversations.map(conversation =>
                     <MessageCardComponent key={conversation._id} conversation={conversation}/>
                 )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    attendee: state.AttendeeReducer.attendee
});

export default connect(mapStateToProps)(MessageListComponent);