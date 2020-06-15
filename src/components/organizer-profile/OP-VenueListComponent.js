import React from 'react'
import {Route, Link} from "react-router-dom";
import {connect} from "react-redux";
import VenueDetailsEditComponent from "../venue/VenueDetailsEditComponent";
import {selectVenue} from "../../actions/VenueActions";

const OPVenueListComponent = (props) =>
    <div>
        <Route path={`/venue/${props.venue._id}`} exact component={VenueDetailsEditComponent}/>
        <div className="row EB-scroll-list">{
            props.organizer.hasOwnProperty("venues") &&
            props.organizer.venues.map(venue =>
                 <Link to={`/venue/${venue._id}`} key={venue._id} onClick={() => props.selectVenue(venue)}>
                     {venue.name}
                 </Link>)}
        </div>
    </div>;

const mapStateToProps = state => ({
    venue: state.VenueReducer.venue,
    organizer: state.OrganizerReducer.organizer
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectVenue: (venue) => {
            dispatch(selectVenue(venue))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(OPVenueListComponent);