import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {selectVenue} from "../../actions/VenueActions";

const OrganizerVenueListComponent = (props) =>
    <div>
        <div className="row EB-scroll-list">
            {
                props.organizer.hasOwnProperty("venues") &&
                props.organizer.venues.map(venue =>
                     <Link to={`/organizer/${props.organizer._id}/venue/${venue._id}/edit`} key={venue._id} onClick={() => props.selectVenue(venue)}>
                         {venue.name}
                     </Link>)
            }
            {
                props.organizer._id === -1 && props.venues !== undefined &&
                props.venues.map(venue =>
                     <Link to={`/venue/${venue._id}`} key={venue._id} onClick={() => props.selectVenue(venue)}>
                         {venue.name}
                     </Link>)
            }
        </div>
    </div>;

const mapStateToProps = state => ({
    organizer: state.OrganizerReducer.organizer
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectVenue: (venue) => {
            dispatch(selectVenue(venue))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(OrganizerVenueListComponent);