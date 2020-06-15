import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {selectEvent} from "../../actions/EventActions";

const OPEventListComponent = (props) =>
    <div>
        <div className="row EB-scroll-list">{
            props.organizer.hasOwnProperty("events") &&
            props.organizer.events.map(event =>
                 <Link to={`/organizer/${props.organizer._id}/event/${event._id}/edit`} key={event._id} onClick={() => props.selectEvent(event)}>
                     {event.name}
                 </Link>)}
        </div>
    </div>;

const mapStateToProps = state => ({
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