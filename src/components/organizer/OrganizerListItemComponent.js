import React from 'react'
import {DEFAULT_EVENT_IMAGE_URL, DEFAULT_VENUE_IMAGE_URL} from "../../common/Constants";

const OrganizerListItemComponent = (props) =>
    <div className="d-inline-flex EB-list-item-double">
        {
            !(props.item.image_url === '' || props.item.image_url === undefined)  ?
            <img src={props.item.image_url} className="rounded EB-item-pic" alt=""/>
            :
            <img src={props.item.hasOwnProperty("url") ? DEFAULT_EVENT_IMAGE_URL : DEFAULT_VENUE_IMAGE_URL} className="rounded EB-item-pic" alt=""/>
        }
        <div className="EB-list-content">
            <span>
                <h6 className="EB-list-text">{props.item.name}</h6>
                <p className="EB-list-text">{props.item.hasOwnProperty("url") ?
                                             props.item.start_date.split("T")[0] :
                                             `${props.item.city}, ${props.item.state === undefined ? props.item.country : props.item.state}`}</p>
            </span>
        </div>
    </div>;

export default OrganizerListItemComponent;