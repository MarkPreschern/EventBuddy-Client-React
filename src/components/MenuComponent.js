import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

const MenuComponent = (props) =>
    <div className="">
        <div className="navbar">
            <Link to='/'>
                <h1 className="navbar-brand">EventBuddy</h1>
            </Link>
            <span className="float-left d-none d-md-inline">
                <Link to='/event/search'>
                    <button className="btn mr-2">
                        Search for events
                    </button>
                </Link>
            </span>
            <span className="float-right">
                {
                    props.attendee._id === -1 && props.organizer._id === -1 &&
                    <Link to='/login'>
                        <button className="btn btn-dark mr-2">Login</button>
                    </Link>
                }
                {
                    props.attendee._id === -1 && props.organizer._id === -1 &&
                    <Link to='/register'>
                        <button className="btn btn-dark mr-2">Register</button>
                    </Link>
                }
                {
                    props.attendee._id !== -1 &&
                    <Link to={`/attendee/profile/${props.attendee._id}`}>
                        <button className="btn btn-dark mr-2">Profile</button>
                    </Link>
                }
                {
                    props.organizer._id !== -1 &&
                    <Link to={`/organizer/profile/${props.organizer._id}`}>
                        <button className="btn btn-dark">Profile</button>
                    </Link>
                }
            </span>
        </div>
    </div>;

const mapStateToProps = state => ({
    attendee: state.AttendeeReducer.attendee,
    organizer: state.OrganizerReducer.organizer
});

export default connect(mapStateToProps)(MenuComponent);