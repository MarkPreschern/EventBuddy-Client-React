import React from 'react'
import {connect} from "react-redux";
import OrganizerService from "../../services/OrganizerService";
import VenueService from "../../services/VenueService";
import {updateOrganizer} from "../../actions/OrganizerActions";

class VenueDetailsEditComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            venue: {_id: -1},

            editingVenueName: false,
            editingCountry: false,
            editingState: false,
            editingCity: false,
            editingAddress: false,
            editingPhoneNumber: false
        }
    }

    componentDidMount() {
        const pathParts = window.location.pathname.split('/');
        pathParts.pop() || pathParts.pop();
        const venueId = pathParts.pop() || pathParts.pop();
        pathParts.pop() || pathParts.pop();
        const organizerId = pathParts.pop() || pathParts.pop();
        OrganizerService.getOrganizer(organizerId).then(organizer => {
            organizer.venues.forEach(venue => {
                if (venue._id === venueId) {
                    this.setState({venue: venue});
                }
            })
        })
    }

    updateVenue = async () => {
        let organizer = this.props.organizer;
        organizer.venues = await organizer.venues.map(venue => (venue._id === this.state.venue._id) ? this.state.venue : venue);
        let venue = this.state.venue;
        let venueId = this.state.venue._id;
        delete venue._id;
        try {
            const data = await VenueService.updateVenue(organizer._id, venueId, venue);
            if (data.hasOwnProperty("message")) {
                // TODO: error handling
            } else {
                venue._id = venueId;
                this.props.updateOrganizer(organizer);
                this.props.history.push(`/organizer/profile/${this.props.organizer._id}`);
            }
        } catch (e) {
            // TODO: error handling
        }
    };

    deleteVenue = async () => {
        let organizer = this.props.organizer;
        organizer.venues = await organizer.venues.filter(venue => venue._id !== this.state.venue._id);
        try {
            const data = await OrganizerService.updateOrganizer(organizer._id, organizer);
            if (data.hasOwnProperty("message")) {
                // TODO: error handling
            } else {
                this.props.updateOrganizer(data);
                this.props.history.push(`/organizer/profile/${this.props.organizer._id}`);
            }
        } catch (e) {
            // TODO: error handling
        }
    };

    toggleEditVenueName = () => {
        this.setState({
            editingVenueName: !this.state.editingVenueName
        })
    };

    toggleEditCountry = () => {
        this.setState({
            editingCountry: !this.state.editingCountry
        })
    };

    toggleEditState = () => {
        this.setState({
            editingState: !this.state.editingState
        })
    };

    toggleEditCity = () => {
        this.setState({
            editingCity: !this.state.editingCity
        })
    };

    toggleEditAddress = () => {
        this.setState({
            editingAddress: !this.state.editingAddress
        })
    };

    toggleEditPhoneNumber = () => {
        this.setState({
            editingPhoneNumber: !this.state.editingPhoneNumber
        })
    };

    render() {
        return (
            <div className="container-fluid">
                {
                    this.state.editingVenueName &&
                    <div>
                        <input className="form-control"
                               type="text"
                               value={this.state.venue.name}
                               onChange={(event) => this.setState({venue: {...this.state.venue, name: event.target.value}})}/>
                        <button onClick={this.toggleEditVenueName}
                                className="btn btn-success">
                            <i className="fa fa-check"/>
                        </button>
                    </div>
                }
                {
                    !this.state.editingVenueName &&
                    <div onClick={this.toggleEditVenueName}>
                        <h1>{this.state.venue.name}<i className="fa fa-pencil EB-pencil"/></h1>
                    </div>
                }
                <div>
                    {
                        this.state.editingCountry &&
                        <div>
                            <h4>Country</h4>
                            <input className="form-control"
                                   type="text"
                                   value={this.state.venue.country}
                                   onChange={(event) => this.setState({venue: {...this.state.venue, country: event.target.value}})}/>
                            <button onClick={this.toggleEditCountry}
                                    className="btn btn-success">
                                <i className="fa fa-check"/>
                            </button>
                        </div>
                    }
                    {
                        !this.state.editingCountry &&
                        <div onClick={this.toggleEditCountry}>
                            <h4>Country</h4>
                            <p>{this.state.venue.country}<i className="fa fa-pencil EB-pencil"/></p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingState &&
                        <div>
                            <h4>State </h4>
                            <input className="form-control"
                                   type="text"
                                   value={this.state.venue.state}
                                   onChange={(event) => this.setState({venue: {...this.state.venue, state: event.target.value}})}/>
                            <button onClick={this.toggleEditState}
                                    className="btn btn-success">
                                <i className="fa fa-check"/>
                            </button>
                        </div>
                    }
                    {
                        !this.state.editingState &&
                        <div onClick={this.toggleEditState}>
                            <h4>State</h4>
                            <p>{this.state.venue.state}<i className="fa fa-pencil EB-pencil"/></p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingCity &&
                        <div>
                            <h4>City </h4>
                            <input className="form-control"
                                   type="text"
                                   value={this.state.venue.city}
                                   onChange={(event) => this.setState({venue: {...this.state.venue, city: event.target.value}})}/>
                            <button onClick={this.toggleEditCity}
                                    className="btn btn-success">
                                <i className="fa fa-check"/>
                            </button>
                        </div>
                    }
                    {
                        !this.state.editingCity &&
                        <div onClick={this.toggleEditCity}>
                            <h4>City</h4>
                            <p>{this.state.venue.city}<i className="fa fa-pencil EB-pencil"/></p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingAddress &&
                        <div>
                            <h4>Address </h4>
                            <input className="form-control"
                                   type="text"
                                   value={this.state.venue.address}
                                   onChange={(event) => this.setState({venue: {...this.state.venue, address: event.target.value}})}/>
                            <button onClick={this.toggleEditAddress}
                                    className="btn btn-success">
                                <i className="fa fa-check"/>
                            </button>
                        </div>
                    }
                    {
                        !this.state.editingAddress &&
                        <div onClick={this.toggleEditAddress}>
                            <h4>Address</h4>
                            <p>{this.state.venue.address}<i className="fa fa-pencil EB-pencil"/></p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingPhoneNumber &&
                        <div>
                            <h4>Phone Number </h4>
                            <input className="form-control"
                                   type="number"
                                   value={this.state.venue.phone_number}
                                   onChange={(event) => this.setState({venue: {...this.state.venue, phone_number: event.target.value}})}/>
                            <button onClick={this.toggleEditPhoneNumber}
                                    className="btn btn-success">
                                <i className="fa fa-check"/>
                            </button>
                        </div>
                    }
                    {
                        !this.state.editingPhoneNumber &&
                        <div onClick={this.toggleEditPhoneNumber}>
                            <h4>Phone Number</h4>
                            <p>{this.state.venue.phone_number}<i className="fa fa-pencil EB-pencil"/></p>
                        </div>
                    }
                </div>
                <div className="d-flex mt-2">
                    <button className="mr-2 btn btn-success d-block align-items-center" onClick={() => this.updateVenue()}>
                        Save
                    </button>
                    <button className="btn btn-danger d-block align-items-center" onClick={() => this.deleteVenue()}>
                        Delete Venue
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    organizer: state.OrganizerReducer.organizer
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateOrganizer: (organizer) => {
            dispatch(updateOrganizer(organizer))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(VenueDetailsEditComponent);