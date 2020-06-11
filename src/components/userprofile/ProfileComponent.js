import React from 'react'
import {Link} from "react-router-dom";
import UPEventListComponent from "./UP-EventListComponent";
import UPMessageListComponent from "./UP-MessageListComponent";

export default class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editingName: false,
            editingPhoneNumber: false,
            editingEmail: false,
            editingAddress: false,
            editingBirthday: false,
            editingGender: false,
            editingUsername: false,
            editingPassword: false
        }

        this.imageurl="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
    }

    toggleEditName = () => this.setState({
        editingName: !this.state.editingName
    })

    toggleEditPhoneNumber = () => this.setState({
        editingPhoneNumber: !this.state.editingPhoneNumber
    })

    toggleEditEmail = () => this.setState({
        editingEmail: !this.state.editingEmail
    })

    toggleEditAddress = () => this.setState({
        editingAddress: !this.state.editingAddress
    })

    toggleEditBirthday = () => this.setState({
        editingBirthday: !this.state.editingBirthday
    })

    toggleEditGender = () => this.setState({
        editingGender: !this.state.editingGender
    })

    toggleEditUsername = () => this.setState({
        editingUsername: !this.state.editingUsername
    })

    toggleEditPassword = () => this.setState({
        editingPassword: !this.state.editingPassword
    })


    render() {
        return(
            <div className="">
                <div className="row">
                <h3 className="col-12">Your Profile</h3>
                    <div className="col-sm-3 col-12">
                        <img src={this.imageurl}
                             className="rounded EB-profile-pic mb-3"
                             alt=""/>
                    </div>
                    <div className="form-group col-sm-9 col-12">
                        <div className="d-flex align-items-center">
                            <label className="mr-2">Display name:</label>
                            {
                                this.state.editingName &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Display name"
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
                                    Danny Tran
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Username:</label>
                            {
                                this.state.editingUsername &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Username"
                                           type="text"/>
                                    <button className="btn btn-outline-success"
                                        onClick={this.toggleEditUsername}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingUsername &&
                                <label onClick={this.toggleEditUsername}>
                                    dtran
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Password:</label>
                            {
                                this.state.editingPassword &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Password"
                                           type="password"/>
                                    <button className="btn btn-outline-success"
                                        onClick={this.toggleEditPassword}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingPassword &&
                                <label onClick={this.toggleEditPassword}>aaaaa</label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Phone number:</label>
                            {
                                this.state.editingPhoneNumber &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Phone number"
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
                                    6267344400
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
                                           type="number"/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditAddress}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingAddress &&
                                <label onClick={this.toggleEditAddress}>
                                    G202 Columbus Ave, Boston, MA
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Gender:</label>
                            {
                                this.state.editingGender &&
                                <div className="d-flex">
                                    <select className="form-control"
                                           placeholder="Username">
                                        <option value="m">Male</option>
                                        <option value="f">Female</option>
                                        <option value="x">Other</option>
                                    </select>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditGender}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingGender &&
                                <label onClick={this.toggleEditGender}>
                                    Male
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Birthday:</label>
                            {
                                this.state.editingBirthday &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           type="date"/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditBirthday}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingBirthday &&
                                <label onClick={this.toggleEditBirthday}>June 30, 1999</label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Email</label>
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
                                <label onClick={this.toggleEditEmail}>dtran@gmail.com</label>
                            }
                        </div>

                        <Link to='/user/profile/aaaaaaa'>
                            <button className="btn btn-outline-success">
                                View as guest
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="row col-sm-6 col-12 d-inline">
                        <h4>Liked events</h4>
                        <div className="EB-scroll-list">
                            <UPEventListComponent/>
                        </div>
                    </div>
                    <div className="row col-sm-6 col-12 d-inline">
                        <Link to="/messages">
                            <h4>Messages</h4>
                        </Link>
                        <div className="EB-scroll-list">
                            <UPMessageListComponent/>
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