import React from 'react'
import { Link } from "react-router-dom"
import {connect} from "react-redux";
import EventAttendeesComponent from "./EventAttendeesComponent"
import EventService from "../../services/EventService";
import AttendeeService from "../../services/AttendeeService";
import VenueService from "../../services/VenueService";
import {selectEvent, updateEvent} from "../../actions/EventActions";
import {updateAttendee} from "../../actions/AttendeeActions";
import {DEFAULT_EVENT_IMAGE_URL} from "../../common/Constants";
import {showAlert} from "../../actions/AlertActions";

class EventDetailComponent extends React.Component {

    venueInformation = () => {
        if (!this.props.event.hasOwnProperty("venue")) {
            return "";
        }

        const venue = this.props.event.venue;
        return `${venue.name} ${venue.city}, ${venue.state === undefined ? venue.country : venue.state}`;
    };

    renderDescription = () => {
        return (this.props.event.description === undefined || this.props.event.description === "") ? "d-none" : "";
    };

    renderInformation = () => {
        return (this.props.event.info === undefined || this.props.event.info === "") ? "d-none" : "";
    };

    renderAccessibility = () => {
        return (this.props.event.accessibility === undefined || this.props.event.accessibility === "") ? "d-none" : "";
    };

    renderTicketLimit = () => {
        return (this.props.event.ticketLimit === undefined || this.props.event.ticketLimit === "") ? "d-none" : "";
    };

    renderPleaseNote = () => {
        return (this.props.event.pleaseNote === undefined || this.props.event.pleaseNote === "") ? "d-none" : "";
    };

    likeEvent = async () => {
        try {
            let event = this.props.event;
            const attendee = this.props.attendee;

            // create event first if needed
            if (event.external && !event.integrated) {
                event.venue = await this.createVenue(event.venue);
                if (event.venue.hasOwnProperty("message")) {
                    this.props.showAlert(event.venue.message.msgBody);
                } else {
                    event = await this.createEvent(event);
                    if (event.hasOwnProperty("message")) {
                        this.props.showAlert(event.venue.message.msgBody);
                    } else {
                        this.likeEventHelper(event, attendee);
                    }
                }
            } else {
                this.likeEventHelper(event, attendee);
            }
        } catch (e) {
            this.props.showAlert("server-side error");
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
                } else if (ok1) {
                    this.props.showAlert(response2.message.msgBody);
                } else if (ok2) {
                    this.props.showAlert(response1.message.msgBody);
                } else {
                    this.props.showAlert(`${response1.message.msgBody} & ${response2.message.msgBody}`);
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
        if (!venue.hasOwnProperty("state")) {
            venue.state = ""
        }
        return await VenueService.createVenue(-1, venue);
    };

    unlikeEvent = async () => {
        const event = this.props.event;
        const attendee = this.props.attendee;

        try {
            Promise.all([EventService.removeEventAttendee(event._id, attendee._id), AttendeeService.removeLikedEvent(attendee._id, event._id)])
                .then(values => {
                    const response1 = values[0];
                    const response2 = values[1];

                    const ok1 = !response1.hasOwnProperty('message');
                    const ok2 = !response2.hasOwnProperty('message');

                    if (ok1 && ok2) {
                        AttendeeService.getAttendee(attendee._id).then(data => this.props.updateAttendee(data));
                        EventService.getEvent(event._id).then(data => this.props.updateEvent(data));
                        this.props.history.push(`/event/${event._id}`)
                    } else if (ok1) {
                        this.props.showAlert(response2.message.msgBody);
                    } else if (ok2) {
                        this.props.showAlert(response1.message.msgBody);
                    } else {
                        this.props.showAlert(`${response1.message.msgBody} & ${response2.message.msgBody}`);
                    }
                });
        } catch (e) {
            this.props.showAlert("server-side error");
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <h1>{this.props.event.name}</h1>
                <div className="row">
                    <div className="col-md-7">
                        {
                            !(this.props.event.image_url === '' || this.props.event.image_url === undefined) ?
                            <img src={this.props.event.image_url} className="rounded EB-item-pic-lg" alt=""/>
                            :
                            <img src={DEFAULT_EVENT_IMAGE_URL} className="rounded EB-item-pic-lg" alt=""/>
                        }
                        {
                            !this.props.event.hasOwnProperty("organizer") &&
                            <p className="text-muted">Photo from EventBrite</p>
                        }
                    </div>
                    <div className="col-md-5 align-self-center">
                        <ul className="EB-list">
                            {
                                this.props.attendee._id !== -1 && this.props.attendee.events_liked.filter(event => event._id === this.props.event._id).length === 0 &&
                                <button className="btn"
                                        onClick={() => this.likeEvent()}>
                                    <i className="fa fa-2x fa-thumbs-o-up"/>
                                    <small className="ml-2">Like this event</small>
                                </button>
                            }
                            {
                                this.props.attendee._id !== -1 && this.props.attendee.events_liked.filter(event => event._id === this.props.event._id).length > 0 &&
                                <button className="btn text-muted"
                                        onClick={() => this.unlikeEvent()}>
                                    <i className="fa fa-2x fa-thumbs-up "/>
                                    <small className="ml-2">Liked</small>
                                </button>
                            }
                            <li>
                                <b>Location: </b>
                                {this.venueInformation()}
                            </li>
                            <li>
                                <b>Date: </b>
                                {this.props.event.start_date.split("T")[0]}
                            </li>
                            <li>
                                <b>Tickets: </b>
                                <a href={this.props.event.url}>Click here!</a>
                            </li>
                            {
                                this.props.event.hasOwnProperty("organizer") &&
                                <li>
                                    <b>Organizer: </b>
                                    <Link to={`/organizer/profile/${this.props.event.organizer._id}`}>
                                            {this.props.event.organizer.company_name}
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    {this.props.event.hasOwnProperty("attendee_likes") && this.props.event.attendee_likes.length > 0 &&
                        <EventAttendeesComponent attendees={this.props.event.attendee_likes}/>
                    }
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
        showAlert: (message) => {
            dispatch(showAlert(message))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(EventDetailComponent);