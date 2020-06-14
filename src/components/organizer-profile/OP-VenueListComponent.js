import React from 'react'
import {Route, Link} from "react-router-dom";
import {connect} from "react-redux";
import VenueDetailsEditComponent from "../venue/VenueDetailsEditComponent";
import {selectVenue} from "../../actions/VenueActions";

class OPVenueListComponent extends React.Component {
    render() {
        return(
            <div>
                <Route path={`/venue/${this.props.venue._id}`} exact component={VenueDetailsEditComponent}/>
                <div className="row EB-scroll-list">{
                    this.props.venues.map(venue =>
                                              <Link to={`/venue/${venue._id}`}
                                                    onClick={() => this.props.selectVenue(venue)}>
                                                  {venue.name}
                                              </Link>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    venue: state.VenueReducer.venue,
    venues: state.VenueReducer.venues
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectVenue: (venue) => {
            dispatch(selectVenue(venue))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(OPVenueListComponent);