import React from 'react'
import {Link} from "react-router-dom";
import {DEFAULT_EVENT_IMAGE_URL} from "../../common/Constants";

const EventAttendeesComponent = (props) =>
    <span className="text-center m-2">
        <h6>{props.attendees.length} people liked this event</h6>
        <div className="d-flex justify-content-around">
            <div className="EB-scroll-list-horizontal">
                <div className="EB-list-horizontal">
                    {
                        props.attendees.map(attendee =>
                        <div key={attendee._id} className="EB-list-content-horizontal text-center">
                            <Link to={`/attendee/profile/${attendee._id}`}>
                                {
                                    !(attendee.image_url === '' || attendee.image_url === undefined) ?
                                    <img className="rounded EB-item-pic" src={attendee.image_url} alt={DEFAULT_EVENT_IMAGE_URL}/>
                                    :
                                    <img className="rounded EB-item-pic" src={DEFAULT_EVENT_IMAGE_URL} alt=""/>
                                }
                                <h6 className='EB-list-text'>
                                    {attendee.name}
                                </h6>
                            </Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </span>;

export default EventAttendeesComponent;