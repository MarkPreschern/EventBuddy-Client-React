import React from 'react'
import {Link} from 'react-router-dom'

export default class MenuComponent
    extends React.Component {
    render() {
        return (
            <div className="">
                <div className="navbar">
                    <Link to='/event/search'>
                        <h1 className="navbar-brand">EventBuddy</h1>
                    </Link>
                    <span className="float-left d-none d-md-inline">
                        <button className="btn mr-2">Concerts</button>
                        <button className="btn mr-2">Sports</button>
                        <button className="btn mr-2">Arts</button>
                        <button className="btn">More</button>
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