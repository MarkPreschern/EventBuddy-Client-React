import React from 'react'

export default class EventDetailsEditComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editingName: false,
            editingLocation: false,
            editingDate: false,
            editingDoorsOpen: false,
            editingTicketLink: false,
            editingDescription: false,
            editingInformation: false,
            editingAccessibility: false,
            editingTicketLimit: false,
            editingNote: false,
            editingPicture: false
        };

        this.imageurl="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
    }

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
            <div className="container">
                {
                    this.state.editingName &&
                    <div>
                        <input className="form-control"
                               type="text"/>
                        <button onClick={this.toggleEditName}
                                className="btn btn-success">
                            <i className="fa fa-check"/>
                        </button>
                    </div>
                }
                {
                    !this.state.editingName &&
                    <div onClick={this.toggleEditName}>
                        <h1>Event Name</h1>
                    </div>
                }
                <div className="row">
                    <div className="col-md-7">
                        <img src={this.imageurl} className="img-fluid" alt=""/>
                        <p className="text-muted">Photo from EventBrite</p>
                    </div>
                    <div className="col-md-5 align-self-center">
                        <ul className="EB-list">
                            {
                                this.state.editingLocation &&
                                <li>
                                    <b>Location: </b>
                                    <input className="form-control"
                                           type="text"/>
                                    <button onClick={this.toggleEditLocation}
                                            className="btn btn-success">
                                        <i className="fa fa-check"/>
                                    </button>
                                </li>
                            }
                            {
                                !this.state.editingLocation &&
                                <li onClick={this.toggleEditLocation}>
                                    <b>Location: </b>
                                    bla bla
                                </li>
                            }
                            {
                                this.state.editingDate &&
                                <li>
                                    <b>Date: </b>
                                    <input className="form-control"
                                           type="text"/>
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
                                    bla bla
                                </li>
                            }
                            {
                                this.state.editingDoorsOpen &&
                                <li>
                                    <b>Doors open: </b>
                                    <input className="form-control"
                                           type="text"/>
                                    <button onClick={this.toggleEditDoorsOpen}
                                            className="btn btn-success">
                                        <i className="fa fa-check"/>
                                    </button>
                                </li>
                            }
                            {
                                !this.state.editingDoorsOpen &&
                                <li onClick={this.toggleEditDoorsOpen}>
                                    <b>Doors open: </b>
                                    bla bla
                                </li>
                            }
                            {
                                this.state.editingTicketLink &&
                                <li>
                                    <b>Tickets: </b>
                                    <input className="form-control"
                                           type="text"/>
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
                                    Click here!
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <div>
                {
                    this.state.editingDescription &&
                    <div>
                        <h4>Description </h4>
                        <input className="form-control"
                               type="text"/>
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
                        <p>bla bla</p>
                    </div>
                }
                </div>
                <div>
                    {
                        this.state.editingInformation &&
                        <div>
                            <h4>Information</h4>
                            <input className="form-control"
                                   type="text"/>
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
                            <p>bla bla</p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingAccessibility &&
                        <div>
                            <h4>Accessibility</h4>
                            <input className="form-control"
                                   type="text"/>
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
                            <p>bla bla</p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingTicketLimit &&
                        <div>
                            <h4>Ticket Limit</h4>
                            <input className="form-control"
                                   type="text"/>
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
                            <p>bla bla</p>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.editingNote &&
                        <div>
                            <h4>Please Note</h4>
                            <input className="form-control"
                                   type="text"/>
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
                            <p>bla bla</p>
                        </div>
                    }
                </div>
                <div className="d-flex mt-2">
                    <button className="mr-2 btn btn-success d-block align-items-center">
                        Save
                    </button>
                    <button className="btn btn-danger d-block align-items-center">
                        Delete Event
                    </button>
                </div>
            </div>
        )
    }
}