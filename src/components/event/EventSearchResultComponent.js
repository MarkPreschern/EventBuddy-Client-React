import React from 'react'
import { connect } from "react-redux"
import "../../css/EventCard.css"
import EventCardComponent from "./EventCardComponent";

const EventSearchResultComponent = (props) =>
    <div>
        <p>{props.events.length + " search results"}</p>
        <div className="row card-row EB-card-row">
            {
                props.events.map(event => <EventCardComponent event={event} key={event._id}/>)
            }
        </div>
    </div>;

const mapStateToProps = state => ({
    events: state.EventReducer.events
});

export default connect(mapStateToProps)(EventSearchResultComponent);