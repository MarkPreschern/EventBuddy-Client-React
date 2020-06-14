import React from 'react'
import {Link} from "react-router-dom";
import OPEventListComponent from "./OP-EventListComponent";
import OPVenueListComponent from "./OP-VenueListComponent";

export default class OrganizerProfileComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editingName: false,
            editingDescription: false,
            editingPhoneNumber: false,
            editingEmail: false,
            editingAddress: false,
            editingImageUrl: false,
            editingCompanyName: false,
            editingCompanyUrl: false,
            editingVenues: false
        };

        this.imageurl="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
    }

    toggleEditName = () => this.setState({
        editingName: !this.state.editingName
    });

    toggleEditDescription = () => this.setState({
        editingDescription: !this.state.editingDescription
    });

    toggleEditPhoneNumber = () => this.setState({
        editingPhoneNumber: !this.state.editingPhoneNumber
    });

    toggleEditEmail = () => this.setState({
        editingEmail: !this.state.editingEmail
    });

    toggleEditAddress = () => this.setState({
        editingAddress: !this.state.editingAddress
    });

    toggleEditImage = () => this.setState({
        editingImageUrl: !this.state.editingImageUrl
    });

    toggleEditCompanyName = () => this.setState({
        editingCompanyName: !this.state.editingCompanyName
    });

    toggleEditCompanyURL = () => this.setState({
        editingCompanyUrl: !this.state.editingCompanyUrl
    });

    toggleEditVenues = () => this.setState({
        editingVenues: !this.state.editingVenues
    });


    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <h3 className="col-12">Your Profile</h3>
                    <div className="col-sm-3 col-12">
                        <img src={this.imageurl}
                             onClick={this.toggleEditImage}
                             className="rounded EB-profile-pic mb-3"
                             alt=""/>
                        {
                            this.state.editingImageUrl &&
                            <div className="d-flex mb-2">
                                <input className="form-control"
                                       placeholder="Image URL"
                                       type="text"/>
                                <button className="btn btn-outline-success"
                                        onClick={this.toggleEditImage}>
                                    <i className="fa fa-check"/>
                                </button>
                            </div>
                        }
                    </div>
                    <div className="form-group col-sm-9 col-12">

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Username:</label>
                            {
                                this.state.editingName &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Username"
                                           type="text"/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditName}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingName &&
                                <label onClick={this.toggleEditName}>
                                    dt-entertainment
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Description:</label>
                            {
                                this.state.editingDescription &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Description"
                                           type="text"/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditDescription}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingDescription &&
                                <label onClick={this.toggleEditDescription}>
                                    This is a great company
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Phone Number:</label>
                            {
                                this.state.editingPhoneNumber &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Phone Number"
                                           type="number"/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditPhoneNumber}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingPhoneNumber &&
                                <label onClick={this.toggleEditPhoneNumber}>
                                    6267344242
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Email:</label>
                            {
                                this.state.editingEmail &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Email"
                                           type="email"/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditEmail}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingEmail &&
                                <label onClick={this.toggleEditEmail}>
                                    dtran@dtran.co
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Address:</label>
                            {
                                this.state.editingAddress &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Address"
                                           type="text"/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditAddress}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingAddress &&
                                <label onClick={this.toggleEditAddress}>
                                    253 Columbus Ave, Boston, MA
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Company Name:</label>
                            {
                                this.state.editingCompanyName &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Company Name"
                                           type="text"/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditCompanyName}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingCompanyName &&
                                <label onClick={this.toggleEditCompanyName}>
                                    Danny Tran Co.
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Company URL:</label>
                            {
                                this.state.editingCompanyUrl &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Company URL"
                                           type="text"/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditCompanyURL}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingCompanyUrl &&
                                <label onClick={this.toggleEditCompanyURL}>
                                    dtran.co
                                </label>
                            }
                        </div>
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="row col-12 col-sm-6 d-inline">
                        <div className="d-flex">
                            <h4 className="">Events</h4>
                            <Link to='/event/new'>
                                <div className="ml-2 EB-add-circle">
                                    <i className="fa fa-plus"/>
                                </div>
                            </Link>
                        </div>
                        <div className=" EB-scroll-list">
                            <OPEventListComponent/>
                        </div>
                    </div>
                    <div className="row col-12 col-sm-6  d-inline ">
                        <div className="d-flex">
                            <h4 className="">Venues</h4>
                            <Link to='/venue/new'>
                                <div className="ml-2 EB-add-circle">
                                    <i className="fa fa-plus"/>
                                </div>
                            </Link>
                        </div>
                        <div className="EB-scroll-list">
                            <OPVenueListComponent/>
                        </div>
                    </div>
                </div>

                <Link to='/event/search'>
                    <button className="btn btn-dark mt-3">
                        Logout
                    </button>
                </Link>
            </div>
        )
    }
}