import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import EventService from "../../services/EventService";
import OrganizerService from "../../services/OrganizerService";
import {updateOrganizer} from "../../actions/OrganizerActions";
import {showAlert} from "../../actions/AlertActions";

class EventAddFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newEvent: {
                name: "",
                image_url: "",
                description: "",
                info: "",
                accessibility: "",
                ticketLimit: "",
                pleaseNote: "",
                start_date: "",
                url: "",
                external: false,
                integrated: true,
                venue: -1,
            }
        }
    }

    createEvent = async () => {
        try {
            let event = this.state.newEvent;
            event.organizer = this.props.organizer;
            const data = await EventService.createEvent(event);
            if (data.hasOwnProperty("message")) {
                this.props.showAlert(data.message.msgBody);
            } else {
                let organizer = this.props.organizer;
                organizer.events.push(data);
                await OrganizerService.updateOrganizer(organizer._id, organizer);
                this.props.updateOrganizer(organizer);
                this.props.history.push('/profile');
            }
        } catch (e) {
            this.props.showAlert("server-side error");
        }
    };

    chooseVenue = (venueId) => {
        const venue = this.props.organizer.venues.filter(venue => venue._id === venueId)[0]
        this.setState({newEvent: {...this.state.newEvent, venue: venue}})
    }

    render() {
        return(
            <div className="container-fluid">
                <h3>Create New Event</h3>
                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Event name:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Event name"
                            type="text"
                            value={this.state.newEvent.name}
                            onChange={(event) => this.setState({newEvent: {...this.state.newEvent, name: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row align-items-center">
                        <label className="col-md-2 col-12">
                            Date:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            type="date"
                            value={this.state.newEvent.start_date}
                            onChange={(event) => this.setState({newEvent: {...this.state.newEvent, start_date: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Venue:
                        </label>
                        <select
                            onChange={(event) => this.chooseVenue(event.target.value)}
                            className="col-md-10 col-12 form-control">
                            <option disabled selected value> -- Select a venue -- </option>
                            {
                                this.props.organizer.hasOwnProperty("venues") &&
                                this.props.organizer.venues.map(venue => {
                                    return <option key={venue._id}
                                                   value={venue._id}
                                                   onClick={() => this.setState({newEvent: {...this.state.newEvent, venue: venue}})}>
                                    {venue.name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Ticket URL:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Ticket URL"
                            type="text"
                            value={this.state.newEvent.url}
                            onChange={(event) => this.setState({newEvent: {...this.state.newEvent, url: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Description:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="(optional)"
                            type="text"
                            value={this.state.newEvent.description}
                            onChange={(event) => this.setState({newEvent: {...this.state.newEvent, description: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Image URL:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="(optional)"
                            type="url"
                            value={this.state.newEvent.image_url}
                            onChange={(event) => this.setState({newEvent: {...this.state.newEvent, image_url: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Information:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="(optional)"
                            type="text"
                            value={this.state.newEvent.info}
                            onChange={(event) => this.setState({newEvent: {...this.state.newEvent, info: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Accessibility:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="(optional)"
                            type="text"
                            value={this.state.newEvent.accessibility}
                            onChange={(event) => this.setState({newEvent: {...this.state.newEvent, accessibility: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Ticket Limit:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="(optional)"
                            type="text"
                            value={this.state.newEvent.ticketLimit}
                            onChange={(event) => this.setState({newEvent: {...this.state.newEvent, ticketLimit: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Note:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="(optional)"
                            type="text"
                            value={this.state.newEvent.pleaseNote}
                            onChange={(event) => this.setState({newEvent: {...this.state.newEvent, pleaseNote: event.target.value}})}/>
                    </div>
                </div>

                <button className="btn btn-success" onClick={() => this.createEvent()}>
                    Save
                </button>
                <Link to={'/profile'}>
                    <button className="btn btn-danger ml-2">Cancel</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    organizer: state.OrganizerReducer.organizer
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateOrganizer: (organizer) => {
            dispatch(updateOrganizer(organizer))
        },
        showAlert: (message) => {
            dispatch(showAlert(message))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(EventAddFormComponent);