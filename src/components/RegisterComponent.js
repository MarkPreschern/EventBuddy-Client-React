import React from 'react'

export default class RegisterComponent
    extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h3>Register</h3>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Username</label>
                    <div className="col-sm-9">
                        <input className="form-control mb-2"
                               placeholder="Username"
                               type="text"/>
                    </div>
                    <label className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-9">
                        <input className="form-control mb-2"
                               placeholder="Password"
                               type="password"/>
                    </div>
                    <label className="col-sm-3 col-form-label">Verify Password</label>
                    <div className="col-sm-9">
                        <input className="form-control"
                               placeholder="Verify password"
                               type="password"/>
                    </div>
                </div>
                <button className="btn btn-dark">
                    Register
                </button>
            </div>
        )
    }
}