import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

const MenuComponent = (props) =>
    <div className="">
        <div className="navbar">
            <Link to='/'>
                <h1 className="navbar-brand">EventBuddy</h1>
            </Link>

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
                    <Link to='/profile'>
                        <button className="btn btn-dark mr-2">Profile</button>
                    </Link>
                }
                {
                    props.organizer._id !== -1 &&
                    <Link to='/profile'>
                        <button className="btn btn-dark">Profile</button>
                    </Link>
                }
                <Link to='/event/search/results'>
                    <button className="btn">
                        <i className="fa fa-search"/>
                    </button>
                </Link>
            </span>
        </div>
    </div>;

const mapStateToProps = state => ({
    attendee: state.AttendeeReducer.attendee,
    organizer: state.OrganizerReducer.organizer
});

export default connect(mapStateToProps)(MenuComponent);