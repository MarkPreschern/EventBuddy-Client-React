import React from 'react'
import {connect} from "react-redux";
import VenueService from "../../services/VenueService";
import {selectVenue} from "../../actions/VenueActions";

class VenueDetailsComponent extends React.Component {
    componentDidMount() {
        const pathParts = window.location.pathname.split('/');
        const venueId = pathParts.pop() || pathParts.pop();
        VenueService.getVenue(-1, venueId).then(venue => {
            this.props.selectVenue(venue);
        })
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div>
                    <h1>{this.props.venue.name}</h1>
                </div>
                <div>
                    <div>
                        <h4>Country</h4>
                        <p>{this.props.venue.country}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>State</h4>
                        <p>{this.props.venue.state}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>City</h4>
                        <p>{this.props.venue.city}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Address</h4>
                        <p>{this.props.venue.address}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Phone Number</h4>
                        <p>{this.props.venue.phone_number}</p>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    venue: state.VenueReducer.venue
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectVenue: (venue) => {
            dispatch(selectVenue(venue))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(VenueDetailsComponent);