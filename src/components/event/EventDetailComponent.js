import React from 'react'
import {selectEvent} from "../../actions/EventActions";
import {connect} from "react-redux";

class EventDetailComponent extends React.Component {

    venueInformation = () => {
        if (!this.props.event.hasOwnProperty("venue")) {
            return "";
        }

        const venue = this.props.event.venue;
        return venue.name + " " + venue.city + ", " + venue.state === undefined ? venue.country : venue.state;
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
            <div className="container">
                <h1>{this.props.event.name}</h1>
                <div className="row">
                    <div className="col-md-7">
                        <img src={this.props.event.image_url} className="img-fluid" alt=""/>
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
                                {this.props.event.start_date}
                            </li>
                            <li>
                                <b>Doors open: </b>
                                {this.props.event.start_date}
                            </li>
                            <li>
                                <b>Tickets: </b>
                                <a href={this.props.event.url}>Click here!</a>
                            </li>
                            <button className="btn btn-dark d-block align-items-center">
                                Like event
                            </button>
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
                    <p>{this.props.event.accessibility === undefined ? "" : this.props.event.accessibility}</p>
                </div>
                <div className={this.renderTicketLimit()}>
                    <h4>Ticket Limit</h4>
                    <p>{this.props.event.ticketLimit === undefined ? "" : this.props.event.ticketLimit}</p>
                </div>
                <div className={this.renderPleaseNote()}>
                    <h4>Please Note</h4>
                    <p>{this.props.event.pleaseNote === undefined ? "" : this.props.event.pleaseNote}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    event: state.EventReducer.event
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectEvent: (event) => {
            dispatch(selectEvent(event))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(EventDetailComponent);