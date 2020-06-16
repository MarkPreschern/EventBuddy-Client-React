import React from 'react'
import {connect} from "react-redux";
import AttendeeEventItemComponent from "./AttendeeEventItemComponent";

const AttendeeEventListComponent = (props) =>
    <div className="">{
        props.attendee.hasOwnProperty("events_liked") &&
        props.attendee.events_liked.map(event => {
            return <AttendeeEventItemComponent key={event._id} event={event}/>
        })
    }
    </div>;

const mapStateToProps = state => ({
    attendee: state.AttendeeReducer.attendee
});

export default connect(mapStateToProps)(AttendeeEventListComponent);