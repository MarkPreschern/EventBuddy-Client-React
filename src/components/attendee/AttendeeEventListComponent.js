import React from 'react'
import AttendeeEventItemComponent from "./AttendeeEventItemComponent"

const AttendeeEventListComponent = (props) =>
    <div className="">{
        props.events.map(event => {
            return <AttendeeEventItemComponent key={event._id} event={event}/>
        })
    }
    </div>;

export default AttendeeEventListComponent;