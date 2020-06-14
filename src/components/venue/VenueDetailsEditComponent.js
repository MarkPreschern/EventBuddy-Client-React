import React from 'react'
import {Link} from "react-router-dom";

export default class VenueDetailsEditComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editingVenueName: false,
            editingCountry: false,
            editingState: false,
            editingCity: false,
            editingAddress: false,
            editingPhoneNumber: false
        }
    }

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
                               type="text"/>
                        <button onClick={this.toggleEditVenueName}
                                className="btn btn-success">
                            <i className="fa fa-check"/>
                        </button>
                    </div>
                }
                {
                    !this.state.editingVenueName &&
                    <div onClick={this.toggleEditVenueName}>
                        <h1>Venue Name</h1>
                    </div>
                }
                <div>
                    {
                        this.state.editingCountry &&
                        <div>
                            <h4>Country </h4>
                            <input className="form-control"
                                   type="text"/>
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
                            <p>bla bla</p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingState &&
                        <div>
                            <h4>State </h4>
                            <input className="form-control"
                                   type="text"/>
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
                            <p>bla bla</p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingCity &&
                        <div>
                            <h4>City </h4>
                            <input className="form-control"
                                   type="text"/>
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
                            <p>bla bla</p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingAddress &&
                        <div>
                            <h4>Address </h4>
                            <input className="form-control"
                                   type="text"/>
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
                            <p>bla bla</p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingPhoneNumber &&
                        <div>
                            <h4>Phone Number </h4>
                            <input className="form-control"
                                   type="number"/>
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
                            <p>bla bla</p>
                        </div>
                    }
                </div>
                <div className="d-flex mt-2">
                    <Link to="/organizer/profile">
                        <button className="mr-2 btn btn-success d-block align-items-center">
                            Save
                        </button>
                    </Link>
                    <Link to="/organizer/profile">
                        <button className="btn btn-danger d-block align-items-center">
                            Delete Venue
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}