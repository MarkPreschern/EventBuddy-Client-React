import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import {selectEvent} from "../../actions/EventActions";
import {DEFAULT_IMAGE_URL} from "../../common/Constants";

const EventCardComponent = (props) =>
    <div className="card EB-card">
        {
            !(props.event.image_url === '' || props.event.image_url === undefined) ?
            <img className="card-img-top" src={props.event.image_url} alt=""/>
            :
            <img className="card-img-top" src={DEFAULT_IMAGE_URL} alt=""/>
        }
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{props.event.name}</h5>
            <h6 className="card-text">{props.event.start_date.split("T")[0]}</h6>
            <p className="card-text">{venueInformation(props)}</p>
            <Link className="text-muted mt-auto "
                  to={`/event/${(props.event.external && !props.event.integrated) ? "external/" : ""}${props.event._id}`}
                  onClick={() => props.selectEvent(props.event)}>
                <p className="card-text float-right">More info ></p>
            </Link>
        </div>
    </div>;

const venueInformation = (props) => {
    if (!props.event.hasOwnProperty("venue")) {
        return "";
    }

    const venue = props.event.venue;
    return venue.name + " " + venue.city + ", " + venue.state === undefined ? venue.country : venue.state;
};

const mapStateToProps = state => ({});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectEvent: (event) => {
            dispatch(selectEvent(event))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(EventCardComponent);