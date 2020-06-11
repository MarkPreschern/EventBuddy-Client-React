import React from 'react'
import { connect } from "react-redux"
import "../../css/EventCard.css"
import EventCardComponent from "./EventCardComponent";

const EventSearchResultComponent = (props) =>
    <div>
        <h1>{props.events.length + " search results"}</h1>
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