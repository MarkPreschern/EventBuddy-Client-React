import React from 'react'
import {Link} from "react-router-dom";
import EventService from "../../services/EventService";
import {createEvent} from "../../actions/EventActions";
import {connect} from "react-redux";

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
                organizer: this.props.organizer
            }
        }
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
                            value={this.state.newEvent.date}
                            onChange={(event) => this.setState({newEvent: {...this.state.newEvent, date: event.target.value}})}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Venue:
                        </label>
                        <select className="col-md-10 col-12 form-control">
                            <option>Venue A</option>
                            <option>Venue B</option>
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
                            type="url"
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

                <button className="btn btn-success"
                        onClick={() => this.props.createEvent(this.state.event)}>
                    Save
                </button>
                <Link to="/organizer/profile">
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
        createEvent: async (event) => {
            const data = await EventService.createEvent(event);
            dispatch(createEvent(data))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(EventAddFormComponent);