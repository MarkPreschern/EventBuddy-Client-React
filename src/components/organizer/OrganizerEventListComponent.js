import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {selectEvent} from "../../actions/EventActions";

const OrganizerEventListComponent = (props) =>
    <div>
        <div className="row EB-scroll-list">
            {
                props.organizer.hasOwnProperty("events") &&
                props.organizer.events.map(event =>
                     <Link to={`/organizer/${props.organizer._id}/event/${event._id}/edit`} key={event._id} onClick={() => props.selectEvent(event)}>
                         {event.name}
                     </Link>)
            }
            {
                props.organizer._id === -1 && props.events !== undefined &&
                props.events.map(event =>
                <Link to={`/event/${event._id}`} key={event._id} onClick={() => props.selectEvent(event)}>
                    {event.name}
                </Link>)
            }
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

export default connect(mapStateToProps, dispatchToPropertyMapper)(OrganizerEventListComponent);