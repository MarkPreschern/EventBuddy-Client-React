import React from 'react'
import { connect } from "react-redux"
import "../../css/EventCard.css"
import EventCardComponent from "./EventCardComponent";

const EventSearchResultComponent = (props) =>
    <div className="container-fluid ">
        <div className="text-center mt-3">
        {
            props.events.length > 0 ?
            <p>{props.events.length + " events for you!"}</p>
                :
            <h5>Hmmmm... No results returned...<br/>Try one of our suggestions above!</h5>
        }
        </div>
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