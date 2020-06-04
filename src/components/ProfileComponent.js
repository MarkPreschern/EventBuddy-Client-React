import React from 'react'
import {Link} from "react-router-dom";
import ProfileItemListComponent from "./ProfileItemListComponent";

export default class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editingUsername: false,
            editingBirthday: false,
            editingEmail: false,
            editingPassword: false
        }

        this.imageurl="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
    }

    toggleEditUsername = () => this.setState({
        editingUsername: !this.state.editingUsername
    })

    toggleEditBirthday = () => this.setState({
        editingBirthday: !this.state.editingBirthday
    })

    toggleEditEmail = () => this.setState({
        editingEmail: !this.state.editingEmail
    })

    toggleEditPassword = () => this.setState({
        editingPassword: !this.state.editingPassword
    })


    render() {
        return(
            <div className="container">
                <h3>Your Profile</h3>
                <div className="row">
                    <div className="col-sm-3 col-12">
                        <img src={this.imageurl}
                             className="rounded EB-profile-pic mb-3"
                             alt=""/>
                    </div>
                    <div className="form-group col-sm-9 col-12">
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
                                <label onClick={this.toggleEditUsername}>dtran</label>
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
                        <Link to='/profile/aaaaaaa'>
                            <button className="btn btn-outline-success">
                                View as guest
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="row col-12 mb-3">
                    <h4>Liked events</h4>
                    <ProfileItemListComponent/>
                </div>
                <div className="row col-12">
                    <h4>Friends</h4>
                    <ProfileItemListComponent/>
                </div>
                <Link to='/event/search'>
                    <button className="btn btn-dark">
                        Logout
                    </button>
                </Link>
            </div>
        )
    }
}