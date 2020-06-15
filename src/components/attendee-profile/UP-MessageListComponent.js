import React from 'react'
import UPMessageItemComponent from "./UP-MessageItemComponent";
import {connect} from "react-redux";

const UPMessageListComponent = (props) =>
    <div className="row">{
        props.attendee.hasOwnProperty("messages") &&
        props.attendee.messages.map(message => {
            return <UPMessageItemComponent key={message._id} message={message}/>
        })
    }
    </div>;

const mapStateToProps = state => ({
    attendee: state.AttendeeReducer.attendee
});

export default connect(mapStateToProps)(UPMessageListComponent);