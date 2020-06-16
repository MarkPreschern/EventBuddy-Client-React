import React from 'react'
import {Link} from "react-router-dom";

const EventAttendeesComponent = (props) =>
    <div>
        <div className="row EB-scroll-list">{
            props.attendees.map(attendee =>
               <Link to={`/attendee/profile/${attendee._id}`} key={attendee._id}>
                   {attendee.name}
               </Link>)}
        </div>
    </div>;

export default EventAttendeesComponent;