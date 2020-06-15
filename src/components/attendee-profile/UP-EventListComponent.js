import React from 'react'
import {connect} from "react-redux";
import UPEventItemComponent from "./UP-EventItemComponent";

const UPEventListComponent = (props) =>
    <div className="row">{
        props.attendee.hasOwnProperty("events_liked") &&
        props.attendee.events_liked.map(event => {
            return <UPEventItemComponent key={event._id} event={event}/>
        })
    }
    </div>;

const mapStateToProps = state => ({
    attendee: state.AttendeeReducer.attendee
});

export default connect(mapStateToProps)(UPEventListComponent);