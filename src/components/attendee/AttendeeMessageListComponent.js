import React from 'react'
import AttendeeMessageItemComponent from "./AttendeeMessageItemComponent";
import {connect} from "react-redux";

const AttendeeMessageListComponent = (props) =>
    <div className="row">{
        props.attendee.hasOwnProperty("messages") &&
        props.attendee.messages.map(message => {
            return <AttendeeMessageItemComponent key={message._id} message={message}/>
        })
    }
    </div>;

const mapStateToProps = state => ({
    attendee: state.AttendeeReducer.attendee
});

export default connect(mapStateToProps)(AttendeeMessageListComponent);