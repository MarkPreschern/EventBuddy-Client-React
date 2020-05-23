import React from 'react'

export default class LoginComponent
    extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h3>Login</h3>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Username</label>
                    <div className="col-sm-9">
                        <input className="form-control mb-2"
                               placeholder="Username"
                               type="text"/>
                    </div>
                    <label className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-9">
                        <input className="form-control"
                               placeholder="Password"
                               type="password"/>
                    </div>
                </div>
                <button className="btn btn-dark">
                    Login
                </button>
            </div>
        )
    }
}