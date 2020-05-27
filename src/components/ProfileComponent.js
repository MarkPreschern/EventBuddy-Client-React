import React from 'react'
import {Link} from "react-router-dom";

export default class ProfileComponent
    extends React.Component {
    render() {
        return(
            <div className="">
                <h3>Your Profile</h3>

                <div className="form-group">
                    <div className="d-flex align-items-center">
                        <label className="mr-2">Username</label>
                        <input className="form-control mb-2"
                               placeholder="Username"
                               type="text"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="mr-2">Password</label>
                        <input className="form-control mb-2"
                               placeholder="Password"
                               type="password"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="mr-2">Birthday</label>
                        <input className="form-control mb-2"
                               type="date"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="mr-2">Email</label>
                        <input className="form-control mb-2"
                               placeholder="Email"
                               type="email"/>
                    </div>
                </div>
                <div>
                    <h4>Liked events</h4>
                </div>
                <div>
                    <h4>Friends</h4>
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