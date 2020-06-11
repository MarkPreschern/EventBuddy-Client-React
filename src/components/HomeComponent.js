import React from 'react'
import {Link} from 'react-router-dom'

export default class HomeComponent extends React.Component {
    render() {
        return(
            <div className="text-center home-container">
                <h1>Welcome to EventBuddy!</h1>
                <p>
                    EventBuddy is a location-based networking application
                    that facilitates communication between users based on
                    mutual event interests.
                </p>
                <p>
                    <small>
                        Project for CS4550 Summer 1 2020.
                        Created by Mark Preschern & Duy (Danny) Tran
                    </small>
                </p>
                <Link to="/event">
                    <button className="btn btn-lg btn-dark">
                        Learn more
                    </button>
                </Link>
            </div>
        )
    }
}