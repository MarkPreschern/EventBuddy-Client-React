import React from 'react'
import {Link} from 'react-router-dom'


export default class HomeComponent extends React.Component {Ω
    render() {
        return(
            <div className="text-center home-container">
                <h1>Welcome to EventBuddy!</h1>
                <h6>Like an event, message a friend!</h6>
                <p>
                    EventBuddy is a networking application
                    that facilitates communication between users based on
                    mutual event interests.
                </p>
                <p>
                    <small>
                        Project for CS4550 Summer 1 2020.
                        Created by Mark Preschern & Duy (Danny) Tran
                    </small>
                </p>
                <Link to="/event/search/results">
                    <button className="btn btn-lg btn-dark">
                        Learn more
                    </button>
                </Link>
            </div>
        )
    }
}