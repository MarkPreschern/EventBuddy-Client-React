import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import AttendeeService from "../services/AttendeeService";
import OrganizerService from "../services/OrganizerService";
import {selectAttendee} from "../actions/AttendeeActions";
import {selectOrganizer} from "../actions/OrganizerActions";
import {showAlert} from "../actions/AlertActions";

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newAttendee: {
                name: "",
                username: "",
                password: "",
                phone_number: "",
                email: "",
                dob: "",
                gender: "Male",
                image_url: ""
            },
            newOrganizer: {
                company_name: "",
                username: "",
                password: "",
                description: "",
                phone_number: "",
                email: "",
                company_url: "",
                image_url: ""
            },
            userType: "attendee",
            verifyPassword: ""
        }
    }

    // transfers duplicate fields
    userTypeChange = (newUserType) => {
        if (newUserType === "attendee") {
            var attendee = {...this.state.newAttendee};
            const organizer = {...this.state.newOrganizer};
            attendee.name = organizer.company_name;
            attendee.username = organizer.username;
            attendee.password = organizer.password;
            attendee.phone_number = organizer.phone_number;
            attendee.email = organizer.email;
            attendee.image_url = organizer.image_url;
            this.setState({userType: newUserType, newAttendee: attendee});
        } else if (newUserType === "organizer") {
            var organizer = {...this.state.newOrganizer};
            const attendee = {...this.state.newAttendee};
            organizer.company_name = attendee.name;
            organizer.username = attendee.username;
            organizer.password = attendee.password;
            organizer.phone_number = attendee.phone_number;
            organizer.email = attendee.email;
            organizer.image_url = attendee.image_url;
            this.setState({userType: newUserType, newOrganizer: organizer});
        }
    };

    // attempts to register user
    register = () => {
        if (this.state.userType === "attendee") {
            if (this.state.newAttendee.password !== this.state.verifyPassword) {
                this.props.showAlert("Passwords don't match");
            } else {
                AttendeeService.createAttendee(this.state.newAttendee).then(data => {
                    if (data.hasOwnProperty("message")) {
                        this.props.showAlert(data.message.msgBody);
                    } else {
                        window.sessionStorage.setItem("userType", JSON.stringify("attendee") + ',');
                        window.sessionStorage.setItem("username", JSON.stringify(this.state.newAttendee.username) + ',');
                        window.sessionStorage.setItem("password", JSON.stringify(this.state.newAttendee.password) + ',');
                        this.props.selectAttendee(data);
                        this.props.history.push('/profile')
                    }
                });
            }
        } else if (this.state.userType === "organizer") {
            if (this.state.newOrganizer.password !== this.state.verifyPassword) {
                this.props.showAlert("Passwords don't match");
            } else {
                OrganizerService.createOrganizer(this.state.newOrganizer).then(data => {
                    if (data.hasOwnProperty("message")) {
                        this.props.showAlert(data.message.msgBody);
                    } else {
                        window.sessionStorage.setItem("userType", JSON.stringify("organizer") + ',');
                        window.sessionStorage.setItem("username", JSON.stringify(this.state.newOrganizer.username) + ',');
                        window.sessionStorage.setItem("password", JSON.stringify(this.state.newOrganizer.password) + ',');
                        this.props.selectOrganizer(data);
                        this.props.history.push('/profile')
                    }
                });
            }
        }
    };

    render() {
        return (
            <div className="text-center">
                <h3>Register</h3>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Role</label>
                    <div className="col-sm-9">
                        <select onChange={(event) => this.userTypeChange(event.target.value)}
                            className="form-control mb-2">
                            <option value='attendee'
                                onClick={() => this.userTypeChange("attendee")}>Event attendee</option>
                            <option value='organizer'
                                onClick={() => this.userTypeChange("organizer")}>Event organizer</option>
                        </select>
                    </div>
                        {
                            this.state.userType === "attendee" &&
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Full Name</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Full Name"
                                           type="text"
                                           value={this.state.newAttendee.name}
                                           onChange={(event) => this.setState({newAttendee: {...this.state.newAttendee, name: event.target.value}})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Username</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Username"
                                           type="text"
                                           value={this.state.newAttendee.username}
                                           onChange={(event) => this.setState({newAttendee: {...this.state.newAttendee, username: event.target.value}})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Password</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Password"
                                           type="password"
                                           value={this.state.newAttendee.password}
                                           onChange={(event) => this.setState({newAttendee: {...this.state.newAttendee, password: event.target.value}})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Verify Password</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Verify password"
                                           type="password"
                                           value={this.state.verifyPassword}
                                           onChange={(event) => this.setState({verifyPassword: event.target.value})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Phone Number</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Phone Number"
                                           type="text"
                                           value={this.state.newAttendee.phone_number}
                                           onChange={(event) => {
                                               const re = /^[0-9\b]+$/;
                                               if (event.target.value === '' || re.test(event.target.value)) {
                                                   this.setState({
                                                                     newAttendee: {
                                                                         ...this.state.newAttendee,
                                                                         phone_number: event.target.value
                                                                     }
                                                                 })
                                               }
                                           }}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Email"
                                           type="text"
                                           value={this.state.newAttendee.email}
                                           onChange={(event) => this.setState({newAttendee: {...this.state.newAttendee, email: event.target.value}})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Date of Birth</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           type="date"
                                           value={this.state.newAttendee.dob}
                                           onChange={(event) => this.setState({newAttendee: {...this.state.newAttendee, dob: event.target.value}})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Gender</label>
                                <div className="col-sm-9">
                                    <select
                                        onChange={(event) => this.setState({newAttendee: {...this.state.newAttendee, gender: event.target.value}})}
                                        className="form-control mb-2">
                                        <option value='Male'
                                            onClick={() => this.setState({newAttendee: {...this.state.newAttendee, gender: "Male"}})}>Male</option>
                                        <option value='Female'
                                            onClick={() => this.setState({newAttendee: {...this.state.newAttendee, gender: "Female"}})}>Female</option>
                                        <option value='Other'
                                            onClick={() => this.setState({newAttendee: {...this.state.newAttendee, gender: "Other"}})}>Other</option>
                                    </select>
                                </div>

                                <label className="col-sm-3 col-form-label">Image URL</label>
                                <div className="col-sm-9">
                                    <input className="form-control "
                                           placeholder="(optional)"
                                           type="text"
                                           value={this.state.newAttendee.image_url}
                                           onChange={(event) => this.setState({newAttendee: {...this.state.newAttendee, image_url: event.target.value}})}/>
                                </div>
                            </div>
                        }
                        {
                            this.state.userType === "organizer" &&
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Company Name</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Company Name"
                                           type="text"
                                           value={this.state.newOrganizer.company_name}
                                           onChange={(event) => this.setState({newOrganizer: {...this.state.newOrganizer, company_name: event.target.value}})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Username</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Username"
                                           type="text"
                                           value={this.state.newOrganizer.username}
                                           onChange={(event) => this.setState({newOrganizer: {...this.state.newOrganizer, username: event.target.value}})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Password</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Password"
                                           type="password"
                                           value={this.state.newOrganizer.password}
                                           onChange={(event) => this.setState({newOrganizer: {...this.state.newOrganizer, password: event.target.value}})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Verify Password</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Verify password"
                                           type="password"
                                           value={this.state.verifyPassword}
                                           onChange={(event) => this.setState({verifyPassword: event.target.value})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Description</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Description"
                                           type="text"
                                           value={this.state.newOrganizer.description}
                                           onChange={(event) => this.setState({newOrganizer: {...this.state.newOrganizer, description: event.target.value}})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Phone Number</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Phone Number"
                                           type="text"
                                           value={this.state.newOrganizer.phone_number}
                                           onChange={(event) => {
                                               const re = /^[0-9\b]+$/;
                                               if (event.target.value === '' || re.test(event.target.value)) {
                                                   this.setState({newOrganizer: {...this.state.newOrganizer, phone_number: event.target.value}})
                                               }
                                           }}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Email"
                                           type="text"
                                           value={this.state.newOrganizer.email}
                                           onChange={(event) => this.setState({newOrganizer: {...this.state.newOrganizer, email: event.target.value}})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Company URL</label>
                                <div className="col-sm-9">
                                    <input className="form-control mb-2"
                                           placeholder="Company URL"
                                           type="text"
                                           value={this.state.newOrganizer.company_url}
                                           onChange={(event) => this.setState({newOrganizer: {...this.state.newOrganizer, company_url: event.target.value}})}/>
                                </div>

                                <label className="col-sm-3 col-form-label">Image URL</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           placeholder="(optional)"
                                           type="text"
                                           value={this.state.newOrganizer.image_url}
                                           onChange={(event) => this.setState({newOrganizer: {...this.state.newOrganizer, image_url: event.target.value}})}/>
                                </div>
                            </div>
                        }
                </div>
                <button className="btn btn-dark mt-2" onClick={() => this.register()}>
                    Register
                </button>
                <Link to='/event/search'>
                    <button className="btn ">
                        Cancel
                    </button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectAttendee: async (attendee) => {
            dispatch(selectAttendee(attendee))
        },
        selectOrganizer: async (organizer) => {
            dispatch(selectOrganizer(organizer))
        },
        showAlert: (message) => {
            dispatch(showAlert(message))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(RegisterComponent);