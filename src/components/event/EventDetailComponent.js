import React from 'react'
import {selectEvent, updateEvent} from "../../actions/EventActions";
import {connect} from "react-redux";
import EventService from "../../services/EventService";
import AttendeeService from "../../services/AttendeeService";
import {updateAttendee} from "../../actions/AttendeeActions";
import VenueService from "../../services/VenueService";

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

    likeEvent = async () => {
        try {
            let event = this.props.event;
            const attendee = this.props.attendee;

            // create event first if needed
            if (event.external && !event.integrated) {
                event.venue = await this.createVenue(event.venue);
                event = await this.createEvent(event);
                this.likeEventHelper(event, attendee);
            } else {
                this.likeEventHelper(event, attendee);
            }
        } catch (e) {
            // TODO: error handling
        }
    };

    likeEventHelper = (event, attendee) => {
        // likes event
        Promise.all([EventService.addEventAttendee(event._id, attendee._id), AttendeeService.addLikedEvent(attendee._id, event._id)])
            .then(values => {
                const response1 = values[0];
                const response2 = values[1];

                const ok1 = !response1.hasOwnProperty('message');
                const ok2 = !response2.hasOwnProperty('message');

                if (ok1 && ok2) {
                    AttendeeService.getAttendee(attendee._id).then(data => this.props.updateAttendee(data));
                    EventService.getEvent(event._id).then(data => this.props.updateEvent(data));
                    this.props.history.push(`/event/${event._id}`)
                } else {
                    // TODO: error handling
                }
            });
    };

    createEvent = async (event) => {
        delete event._id;
        event.integrated = true;
        const data = await EventService.createEvent(event);
        this.props.selectEvent(data);
        return data;
    };

    createVenue = async (venue) => {
        return await VenueService.createVenue(-1, venue);
    };

    render() {
        return (
            <div className="container-fluid">
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
                            {
                                this.props.attendee._id !== -1 &&
                                <button className="btn btn-dark d-block align-items-center"
                                        onClick={() => this.likeEvent()}>
                                    Like event
                                </button>
                            }
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
    event: state.EventReducer.event,
    attendee: state.AttendeeReducer.attendee
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectEvent: (event) => {
            dispatch(selectEvent(event))
        },
        updateEvent: (event) => {
            dispatch(updateEvent(event._id, event))
        },
        updateAttendee: (attendee) => {
            dispatch(updateAttendee(attendee))
        },
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(EventDetailComponent);