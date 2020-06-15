import React from 'react'
import {Route, Link} from "react-router-dom";
import {connect} from "react-redux";
import EventDetailsEditComponent from "../event/EventDetailsEditComponent";
import {selectEvent} from "../../actions/EventActions";

const OPEventListComponent = (props) =>
    <div>
        <Route path={`/event/${(props.event.external && !props.event.integrated) ? "external/" : ""}${props.event._id}`} exact component={EventDetailsEditComponent}/>
        <div className="row EB-scroll-list">{
            props.organizer.hasOwnProperty("events") &&
            props.organizer.events.map(event =>
                 <Link to={`/event/${(event.external && !event.integrated) ? "external/" : ""}${event._id}`} key={event._id} onClick={() => props.selectEvent(event)}>
                     {event.name}
                 </Link>)}
        </div>
    </div>;

const mapStateToProps = state => ({
    event: state.EventReducer.event,
    organizer: state.OrganizerReducer.organizer
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectEvent: (event) => {
            dispatch(selectEvent(event))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(OPEventListComponent);