import React from 'react'
import {connect} from "react-redux";
import EventService from "../../services/EventService";
import OrganizerService from "../../services/OrganizerService";
import {updateOrganizer} from "../../actions/OrganizerActions";
import {showAlert} from "../../actions/AlertActions";
import {DEFAULT_EVENT_IMAGE_URL} from "../../common/Constants";
import EventAttendeesComponent from "./EventAttendeesComponent";

class EventDetailsEditComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {_id: -1},

            editingName: false,
            editingTicketLink: false,
            editingDescription: false,
            editingInformation: false,
            editingAccessibility: false,
            editingTicketLimit: false,
            editingNote: false,
            editingPicture: false
        };
    }

    componentDidMount() {
        const pathParts = window.location.pathname.split('/');
        pathParts.pop() || pathParts.pop();
        const eventId = pathParts.pop() || pathParts.pop();
        pathParts.pop() || pathParts.pop();
        const organizerId = pathParts.pop() || pathParts.pop();
        OrganizerService.getOrganizer(organizerId).then(organizer => {
            organizer.events.forEach(event => {
                if (event._id === eventId) {
                    EventService.getEvent(event._id).then(data => {
                        this.setState({event: data})
                    });
                }
            })
        })
    }

    updateEvent = async () => {
        let organizer = this.props.organizer;
        organizer.events = await organizer.events.map(event => (event._id === this.state.event._id) ? this.state.event : event);
        let event = this.state.event;
        let eventId = this.state.event._id;
        delete event._id;
        try {
            const data = await EventService.updateEvent(eventId, event);
            if (data.hasOwnProperty("message")) {
                this.props.showAlert(data.message.msgBody);
            } else {
                event._id = eventId;
                this.props.updateOrganizer(organizer);
                this.props.history.push('/profile');
            }
        } catch (e) {
            this.props.showAlert("server-side error");
        }
    };

    deleteEvent = async () => {
        let organizer = this.props.organizer;
        organizer.events = await organizer.events.filter(event => event._id !== this.state.event._id);
        try {
            const data = await OrganizerService.updateOrganizer(organizer._id, organizer);
            if (data.hasOwnProperty("message")) {
                this.props.showAlert(data.message.msgBody);
            } else {
                this.props.updateOrganizer(data);
                this.props.history.push('/profile');
            }
        } catch (e) {
            this.props.showAlert("server-side error");
        }
    };

    venueInformation = () => {
        if (!this.state.event.hasOwnProperty("venue")) {
            return "";
        }

        const venue = this.state.event.venue;
        return `${venue.name} ${venue.city}, ${venue.state === undefined ? venue.country : venue.state}`;
    };

    toggleEditName = () => {
        this.setState({
            editingName: !this.state.editingName
        })
    };

    toggleEditLocation = () => {
        this.setState({
            editingLocation: !this.state.editingLocation
        })
    };

    toggleEditDate = () => {
        this.setState({
            editingDate: !this.state.editingDate
        })
    };

    toggleEditDoorsOpen = () => {
        this.setState({
            editingDoorsOpen: !this.state.editingDoorsOpen
        })
    };

    toggleEditTicketLink = () => {
        this.setState({
            editingTicketLink: !this.state.editingTicketLink
        })
    };

    toggleEditDescription = () => {
        this.setState({
            editingDescription: !this.state.editingDescription
        })
    };

    toggleEditInformation = () => {
        this.setState({
            editingInformation: !this.state.editingInformation
        })
    };

    toggleEditAccessibility = () => {
        this.setState({
            editingAccessibility: !this.state.editingAccessibility
        })
    };

    toggleEditTicketLimit = () => {
        this.setState({
            editingTicketLimit: !this.state.editingTicketLimit
        })
    };

    toggleEditNote = () => {
        this.setState({
            editingNote: !this.state.editingNote
        })
    };

    toggleEditPicture = () => {
        this.setState({
            editingPicture: !this.state.editingPicture
        })
    };

    render() {
        return (
            <div className="container-fluid">
                {
                    this.state.editingName &&
                    <div>
                        <input className="form-control"
                               type="text"
                               value={this.state.event.name}
                               onChange={(event) => this.setState({event: {...this.state.event, name: event.target.value}})}/>
                        <button onClick={this.toggleEditName}
                                className="btn btn-success">
                            <i className="fa fa-check"/>
                        </button>
                    </div>
                }
                {
                    !this.state.editingName &&
                    <div onClick={this.toggleEditName}>
                        <h1>{this.state.event.name}<i className="fa fa-pencil EB-pencil"/></h1>
                    </div>
                }
                <div className="row">
                    {
                        !this.state.editingPicture ?
                        <div className="col-md-7">
                            {
                                !(this.state.event.image_url === '' || this.state.event.image_url
                                  === undefined) ?
                                <img src={this.state.event.image_url} className="rounded EB-item-pic-lg EB-margin-bottom-0" alt=""/>
                                                 :
                                <img src={DEFAULT_EVENT_IMAGE_URL} className="rounded EB-item-pic-lg EB-margin-bottom-0" alt=""/>
                            }
                            <div className="text-center">
                                <button className="btn" onClick={!this.state.editingPicture ? this.toggleEditPicture : () => {}}>
                                    <small>Picture URL</small>
                                    <i className="fa fa-pencil ml-2"/>
                                </button>
                            </div>
                        </div>
                        :
                        <div className="col-md-7">
                             <div className="form-row">
                                 <input className="form-control col-12"
                                        placeholder="Image URL"
                                        type="text"
                                        value={this.state.event.image_url}
                                        onChange={(event) => this.setState({event: {...this.state.event, image_url: event.target.value}})}/>
                                 <button className="btn btn-outline-success col-12"
                                         onClick={this.toggleEditPicture}>
                                     <i className="fa fa-check"/>
                                 </button>
                             </div>
                        </div>
                    }
                    <div className="col-md-5 align-self-center">
                        <ul className="EB-list">
                            <li onClick={this.toggleEditLocation}>
                                <b>Location: </b>
                                {this.venueInformation()}
                            </li>
                            {
                                this.state.editingDate &&
                                <li>
                                    <b>Date: </b>
                                    <input className="form-control"
                                           type="date"
                                           value={this.state.event.date}
                                           onChange={(event) => this.setState({event: {...this.state.event, start_date: event.target.value}})}/>
                                    <button onClick={this.toggleEditDate}
                                            className="btn btn-success">
                                        <i className="fa fa-check"/>
                                    </button>
                                </li>
                            }
                            {
                                !this.state.editingDate &&
                                <li onClick={this.toggleEditDate}>
                                    <b>Date: </b>
                                    {this.state.event.hasOwnProperty("start_date") ? this.state.event.start_date.split("T")[0] : ""}
                                    <i className="fa fa-pencil EB-pencil"/>
                                </li>
                            }

                            {
                                this.state.editingTicketLink &&
                                <li>
                                    <b>Tickets: </b>
                                    <input className="form-control"
                                           type="text"
                                           value={this.state.event.url}
                                           onChange={(event) => this.setState({event: {...this.state.event, url: event.target.value}})}/>
                                    <button onClick={this.toggleEditTicketLink}
                                            className="btn btn-success">
                                        <i className="fa fa-check"/>
                                    </button>
                                </li>
                            }
                            {
                                !this.state.editingTicketLink &&
                                <li onClick={this.toggleEditTicketLink}>
                                    <b>Tickets: </b>
                                    {this.state.event.url}
                                    <i className="fa fa-pencil EB-pencil"/>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    {this.state.event.hasOwnProperty("attendee_likes") && this.state.event.attendee_likes.length > 0 && this.props.organizer._id !== -1 &&
                     <EventAttendeesComponent attendees={this.state.event.attendee_likes}/>
                    }
                </div>
                <div>
                {
                    this.state.editingDescription &&
                    <div>
                        <h4>Description </h4>
                        <input className="form-control"
                               type="text"
                               value={this.state.event.description}
                               onChange={(event) => this.setState({event: {...this.state.event, description: event.target.value}})}/>
                        <button onClick={this.toggleEditDescription}
                                className="btn btn-success">
                            <i className="fa fa-check"/>
                        </button>
                    </div>
                }
                {
                    !this.state.editingDescription &&
                    <div onClick={this.toggleEditDescription}>
                        <h4>Description</h4>
                        <p>{this.state.event.description}<i className="fa fa-pencil EB-pencil"/></p>
                    </div>
                }
                </div>
                <div>
                    {
                        this.state.editingInformation &&
                        <div>
                            <h4>Information</h4>
                            <input className="form-control"
                                   type="text"
                                   value={this.state.event.info}
                                   onChange={(event) => this.setState({event: {...this.state.event, info: event.target.value}})}/>
                            <button onClick={this.toggleEditInformation}
                                    className="btn btn-success">
                                <i className="fa fa-check"/>
                            </button>
                        </div>
                    }
                    {
                        !this.state.editingInformation &&
                        <div onClick={this.toggleEditInformation}>
                            <h4>Information</h4>
                            <p>{this.state.event.info}<i className="fa fa-pencil EB-pencil"/></p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingAccessibility &&
                        <div>
                            <h4>Accessibility</h4>
                            <input className="form-control"
                                   type="text"
                                   value={this.state.event.accessibility}
                                   onChange={(event) => this.setState({event: {...this.state.event, accessibility: event.target.value}})}/>
                            <button onClick={this.toggleEditAccessibility}
                                    className="btn btn-success">
                                <i className="fa fa-check"/>
                            </button>
                        </div>
                    }
                    {
                        !this.state.editingAccessibility &&
                        <div onClick={this.toggleEditAccessibility}>
                            <h4>Accessibility</h4>
                            <p>{this.state.event.accessibility}<i className="fa fa-pencil EB-pencil"/></p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingTicketLimit &&
                        <div>
                            <h4>Ticket Limit</h4>
                            <input className="form-control"
                                   type="text"
                                   value={this.state.event.ticketLimit}
                                   onChange={(event) => this.setState({event: {...this.state.event, ticketLimit: event.target.value}})}/>
                            <button onClick={this.toggleEditTicketLimit}
                                    className="btn btn-success">
                                <i className="fa fa-check"/>
                            </button>
                        </div>
                    }
                    {
                        !this.state.editingTicketLimit &&
                        <div onClick={this.toggleEditTicketLimit}>
                            <h4>Ticket Limit</h4>
                            <p>{this.state.event.ticketLimit}<i className="fa fa-pencil EB-pencil"/></p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingNote &&
                        <div>
                            <h4>Please Note</h4>
                            <input className="form-control"
                                   type="text"
                                   value={this.state.event.pleaseNote}
                                   onChange={(event) => this.setState({event: {...this.state.event, pleaseNote: event.target.value}})}/>
                            <button onClick={this.toggleEditNote}
                                    className="btn btn-success">
                                <i className="fa fa-check"/>
                            </button>
                        </div>
                    }
                    {
                        !this.state.editingNote &&
                        <div onClick={this.toggleEditNote}>
                            <h4>Please Note</h4>
                            <p>{this.state.event.pleaseNote}<i className="fa fa-pencil EB-pencil"/></p>
                        </div>
                    }
                </div>
                <div className="d-flex mt-2">
                    <button className="mr-2 btn btn-success d-block align-items-center" onClick={() => this.updateEvent()}>
                        Save
                    </button>
                    <button className="btn btn-danger d-block align-items-center" onClick={() => this.deleteEvent()}>
                        Delete Event
                    </button>
                </div>
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

export default connect(mapStateToProps, dispatchToPropertyMapper)(EventDetailsEditComponent);