import React from 'react'
import { Link } from 'react-router-dom'

export default class EventCardComponent extends React.Component {

    venueInformation = () => {
        if (this.props.event._embedded === undefined || this.props.event._embedded.venues === undefined) {
            return "";
        }

        const venues = this.props.event._embedded.venues;
        let venueInfo = [];
        let venueLocation = "";
        venues.forEach(venue => {
            venueInfo.push(venue.name);
            venueLocation = venue.city.name + ", " + (venue.state === undefined ? venue.country.countryCode : venue.state.stateCode);
        });
        return venueInfo.join(" & ") + " " + venueLocation;
    };

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.event.images[0].url} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.event.name}</h5>
                    <h6 className="card-text">{this.props.event.dates.start.localDate}</h6>
                    <p className="card-text">{this.venueInformation()}</p>
                    <Link className="text-muted float-right"
                          to={`/event/${this.props.event.id}`}
                          onClick={this.props.selectEventHandler.bind(this, this.props.event.id)}>
                        <p className="card-text">More info ></p>
                    </Link>
                </div>
            </div>
        )
    }
}