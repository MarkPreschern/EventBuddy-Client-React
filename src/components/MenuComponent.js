import React from 'react'

export default class MenuComponent
    extends React.Component {
    render() {
        return (
            <div className="">
                <div className="navbar">
                    <h1 className="navbar-brand">EventBuddy</h1>
                    <span className="float-left d-none d-md-inline">
                        <button className="btn mr-2">Concerts</button>
                        <button className="btn mr-2">Sports</button>
                        <button className="btn mr-2">Arts & Theater</button>
                        <button className="btn">More</button>
                    </span>
                    <span className="float-right">
                        <button className="btn btn-dark mr-2">Login</button>
                        <button className="btn btn-dark">Register</button>
                    </span>
                </div>
            </div>
        )
    }
}