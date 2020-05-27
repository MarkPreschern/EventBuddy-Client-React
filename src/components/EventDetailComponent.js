import React from 'react'

export default class EventDetailComponent extends React.Component {

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

    renderDescription = () => {
        return this.props.event.description === undefined ? "d-none" : "";
    };

    renderInformation = () => {
        return this.props.event.info === undefined ? "d-none" : "";
    };

    renderAccessibility = () => {
        return this.props.event.accessibility === undefined ? "d-none" : "";
    };

    renderTicketLimit = () => {
        return this.props.event.ticketLimit === undefined ? "d-none" : "";
    };

    renderPleaseNote = () => {
        return this.props.event.pleaseNote === undefined ? "d-none" : "";
    };


    render() {
        return (
            <div>
                <h1>{this.props.event.name}</h1>
                <div className="row">
                    <div className="col-md-7">
                        <img src={this.props.event.images[0].url} className="img-fluid" alt=""/>
                        <p className="text-muted">Photo from EventBrite</p>
                    </div>
                    <div className="col-md-5 align-self-center">
                        <ul className="EB-list">
                            <li>
                                <b>Location: </b>
                                {this.venueInformation()}
                            </li>
                            <li>
                                <b>Date: </b>
                                {this.props.event.dates.start.localDate}
                            </li>
                            <li>
                                <b>Doors open: </b>
                                {this.props.event.dates.start.localTime}
                            </li>
                            <li>
                                <b>Tickets: </b>
                                <a href={this.props.event.url}>Click here!</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={this.renderDescription()}>
                    <h4>Description</h4>
                    <p>{this.props.event.description === undefined ? "" : this.props.event.description}</p>
                </div>
                <div className={this.renderInformation()}>
                    <h4>Information</h4>
                    <p>{this.props.event.info === undefined ? "" : this.props.event.info}</p>
                </div>
                <div className={this.renderAccessibility()}>
                    <h4>Accessibility</h4>
                    <p>{this.props.event.accessibility === undefined ? "" : this.props.event.accessibility.info}</p>
                </div>
                <div className={this.renderTicketLimit()}>
                    <h4>Ticket Limit</h4>
                    <p>{this.props.event.ticketLimit === undefined ? "" : this.props.event.ticketLimit.info}</p>
                </div>
                <div className={this.renderPleaseNote()}>
                    <h4>Please Note</h4>
                    <p>{this.props.event.pleaseNote === undefined ? "" : this.props.event.pleaseNote}</p>
                </div>
            </div>
        )
    }
}