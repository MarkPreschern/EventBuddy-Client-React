import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {selectEvent} from "../../actions/EventActions";
import OrganizerListItemComponent from "./OrganizerListItemComponent";

const OrganizerEventListComponent = (props) =>
    <div>
        <div className="">
            {
                props.loggedInOrganizer._id !== -1 && props.organizer.hasOwnProperty("events") &&
                props.organizer.events.map(event =>
                    <Link to={eventPage(props.loggedInOrganizer, props.organizer, event)} key={event._id}>
                        <OrganizerListItemComponent item={event}/>
                    </Link>)
            }
            {
                props.loggedInOrganizer._id === -1 && props.events !== undefined &&
                props.events.map(event =>
                <Link to={`/event/${event._id}`} key={event._id}
                      onClick={() => props.selectEvent(event)}>
                    <OrganizerListItemComponent item={event}/>
                </Link>)
            }
        </div>
    </div>;

const eventPage = (loggedInOrganizer, organizer, event) => {
    if (loggedInOrganizer._id !== -1 && loggedInOrganizer._id === organizer._id) {
        return `/organizer/${organizer._id}/event/${event._id}/edit`;
    } else {
        return `/event/${event._id}`;
    }
};

const mapStateToProps = state => ({
    loggedInOrganizer: state.OrganizerReducer.organizer
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectEvent: (event) => {
            dispatch(selectEvent(event))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(OrganizerEventListComponent);