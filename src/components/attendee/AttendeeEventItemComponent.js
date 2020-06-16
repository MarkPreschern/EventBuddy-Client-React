import React from 'react'
import {Link} from "react-router-dom";
import {DEFAULT_EVENT_IMAGE_URL} from "../../common/Constants";

const AttendeeEventItemComponent = (props) =>
    <Link to={(props.event.external && !props.event.integrated) ? `/event/external/${props.event._id}` : `/event/${props.event._id}`}>
        <div className="d-inline-flex EB-list-item">
            {
                props.event.image_url !== '' ?
                <img src={props.event.image_url} className="rounded EB-item-pic" alt=""/>
                :
                <img src={DEFAULT_EVENT_IMAGE_URL} className="rounded EB-item-pic" alt=""/>
            }
            <div className="EB-list-content">
                <span>
                    <h5 className="EB-list-text">{props.event.name}</h5>
                    <p className="EB-list-text">{props.event.start_date.split("T")[0]}</p>
                </span>
            </div>
        </div>
    </Link>;


export default AttendeeEventItemComponent;