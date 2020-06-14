import React from 'react'
import {connect} from "react-redux";
import VenueService from "../../services/VenueService";
import {createVenue} from "../../actions/VenueActions";

class VenueAddFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newVenue: {
                name: "",
                country: "",
                state: "",
                city: "",
                address: "",
                phone_number: "",
            }
        }
    }

    render() {
        return(
            <div className="container-fluid">
                <h3>Create New Venue</h3>
                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Venue name:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Venue name"
                            type="text"
                            value={this.state.newVenue.name}
                            onChange={(event) => this.setState({newVenue: {...this.state.newVenue, name: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row align-items-center">
                        <label className="col-md-2 col-12">
                            Country:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Country"
                            type="text"
                            value={this.state.newVenue.country}
                            onChange={(event) => this.setState({newVenue: {...this.state.newVenue, country: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            State:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="State"
                            type="text"
                            value={this.state.newVenue.state}
                            onChange={(event) => this.setState({newVenue: {...this.state.newVenue, state: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            City:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="City"
                            type="text"
                            value={this.state.newVenue.city}
                            onChange={(event) => this.setState({newVenue: {...this.state.newVenue, city: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Address:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Address"
                            type="text"
                            value={this.state.newVenue.address}
                            onChange={(event) => this.setState({newVenue: {...this.state.newVenue, address: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Phone number:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Phone number"
                            type="number"
                            value={this.state.newVenue.phone_number}
                            onChange={(event) => this.setState({newVenue: {...this.state.newVenue, phone_number: event.target.value}})}/>
                    </div>
                </div>

                <button className="btn btn-success"
                        onClick={this.props.createVenue(this.state.venue)}>
                    Save
                </button>
                <button className="btn btn-danger ml-2">Cancel</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createVenue: async (venue) => {
            const data = await VenueService.createVenue(venue);
            dispatch(createVenue(data))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(EventAddFormComponent);