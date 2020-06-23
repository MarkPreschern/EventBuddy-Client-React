import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import AttendeeService from "../services/AttendeeService";
import OrganizerService from "../services/OrganizerService";
import {selectAttendee} from "../actions/AttendeeActions";
import {selectOrganizer} from "../actions/OrganizerActions";
import {showAlert} from "../actions/AlertActions";

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: "attendee",
            username: "",
            password: "",
        }
    }

    // transfers duplicate fields
    userTypeChange = (newUserType) => {
        if (newUserType === "attendee") {
            this.setState({userType: newUserType});
        } else if (newUserType === "organizer") {
            this.setState({userType: newUserType});
        }
    };

    // attempts to register user
    login = () => {
        if (this.state.userType === "attendee") {
            AttendeeService.loginAttendee({username: this.state.username, password: this.state.password}).then(data => {
                if (data.hasOwnProperty("message")) {
                    this.props.showAlert(data.message.msgBody);
                } else {
                    window.sessionStorage.setItem("userType", JSON.stringify("attendee") + ',');
                    window.sessionStorage.setItem("username", JSON.stringify(this.state.username) + ',');
                    window.sessionStorage.setItem("password", JSON.stringify(this.state.password) + ',');
                    this.props.loginAttendee(data);
                    this.props.history.push('/profile')
                }
            });
        } else if (this.state.userType === "organizer") {
            OrganizerService.loginOrganizer({username: this.state.username, password: this.state.password}).then(data => {
                if (data.hasOwnProperty("message")) {
                    this.props.showAlert(data.message.msgBody);
                } else {
                    window.sessionStorage.setItem("userType", "organizer");
                    window.sessionStorage.setItem("username", this.state.username);
                    window.sessionStorage.setItem("password", this.state.password);
                    this.props.loginOrganizer(data);
                    this.props.history.push('/profile')
                }
            });
        }
    };

    render() {
        return (
            <div className="text-center">
                <h3>Login</h3>
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
                    <label className="col-sm-3 col-form-label">Username</label>
                    <div className="col-sm-9">
                        <input className="form-control mb-2"
                               placeholder="Username"
                               type="text"
                               value={this.state.username}
                               onChange={(event) => this.setState({username: event.target.value})}/>
                    </div>
                    <label className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-9">
                        <input className="form-control"
                               placeholder="Password"
                               type="password"
                               value={this.state.password}
                               onChange={(event) => this.setState({password: event.target.value})}/>
                    </div>
                </div>
                    <button className="btn btn-dark" onClick={() => this.login()}>
                        Login
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
        loginAttendee: (attendee) => {
            dispatch(selectAttendee(attendee))
        },
        loginOrganizer: (organizer) => {
            dispatch(selectOrganizer(organizer))
        },
        showAlert: (message) => {
            dispatch(showAlert(message))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(LoginComponent);