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
                     <Link to={`/organizer/${props.organizer._id}/venue/${venue._id}/edit`} key={venue._id}
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