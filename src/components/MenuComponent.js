import React from 'react'
import {Link} from 'react-router-dom'

export default class MenuComponent
    extends React.Component {
    render() {
        return (
            <div className="">
                <div className="navbar">
                    <Link to='/home'>
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
                        <Link to='/login'>
                             <button className="btn btn-dark mr-2">Login</button>
                        </Link>
                        <Link to='/register'>
                            <button className="btn btn-dark mr-2">Register</button>
                        </Link>
                        <Link to='/profile'>
                            <button className="btn btn-dark">Profile</button>
                        </Link>
                    </span>
                </div>
            </div>
        )
    }
}