import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {selectVenue} from "../../actions/VenueActions";
import OrganizerListItemComponent from "./OrganizerListItemComponent";

const OrganizerVenueListComponent = (props) =>
    <div>
        <div className="EB-scroll-list">
            {
                props.organizer.hasOwnProperty("venues") &&
                props.organizer.venues.map(venue =>
                     <Link to={venuePage(props.loggedInOrganizer, props.organizer, venue)} key={venue._id}
                           onClick={() => props.selectVenue(venue)}>
                         <OrganizerListItemComponent item={venue}/>
                     </Link>)
            }
            {
                props.organizer._id === -1 &&
                props.venues !== undefined &&
                props.venues.map(venue =>
                     <Link to={`/venue/${venue._id}`} key={venue._id}
                           onClick={() => props.selectVenue(venue)}>
                         <OrganizerListItemComponent item={venue}/>
                     </Link>)
            }
        </div>
    </div>;

const venuePage = (loggedInOrganizer, organizer, venue) => {
    if (loggedInOrganizer._id !== -1 && loggedInOrganizer._id === organizer._id) {
        return `/organizer/${organizer._id}/venue/${venue._id}/edit`;
    } else {
        return `/venue/${venue._id}`;
    }
};

const mapStateToProps = state => ({
    loggedInOrganizer: state.OrganizerReducer.organizer
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectVenue: (venue) => {
            dispatch(selectVenue(venue))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(OrganizerVenueListComponent);