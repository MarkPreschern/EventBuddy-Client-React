import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import AttendeeService from "../services/AttendeeService";
import OrganizerService from "../services/OrganizerService";
import {selectAttendee} from "../actions/AttendeeActions";
import {selectOrganizer} from "../actions/OrganizerActions";

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: "attendee",
            username: "",
            password: ""
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
                    // TODO: handle error message
                } else {
                    this.props.loginAttendee(data);
                    this.props.history.push(`/attendee/profile/${data._id}`)
                }
            });
        } else if (this.state.userType === "organizer") {
            OrganizerService.loginOrganizer({username: this.state.username, password: this.state.password}).then(data => {
                if (data.hasOwnProperty("message")) {
                    // TODO: handle error message
                } else {
                    this.props.loginOrganizer(data);
                    this.props.history.push(`/organizer/profile/${data._id}`)
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
                        <select className="form-control mb-2">
                            <option onClick={() => this.userTypeChange("attendee")}>Event attendee</option>
                            <option onClick={() => this.userTypeChange("organizer")}>Event organizer</option>
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
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(LoginComponent);