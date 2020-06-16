import React from 'react'
import {Link} from "react-router-dom";

const AttendeeEventItemComponent = (props) =>
    <div className="">
        <Link to={(props.event.external && !props.event.integrated) ? `/event/external/${props.event._id}` : `/event/${props.event._id}`}>
            <img src={props.event.image_url} className="rounded EB-item-pic" alt=""/>
        </Link>
    </div>;

export default AttendeeEventItemComponent;