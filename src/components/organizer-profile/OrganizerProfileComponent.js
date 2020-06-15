import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import OPEventListComponent from "./OP-EventListComponent";
import OPVenueListComponent from "./OP-VenueListComponent";
import {updateOrganizer} from "../../actions/OrganizerActions";
import OrganizerService from "../../services/OrganizerService";
import {resetAction} from "../../actions/RootActions";

class OrganizerProfileComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            organizer: {_id: -1},

            editingName: false,
            editingDescription: false,
            editingPhoneNumber: false,
            editingEmail: false,
            editingImageUrl: false,
            editingCompanyName: false,
            editingCompanyUrl: false,
        };
    }

    componentDidMount() {
        const pathParts = window.location.pathname.split('/');
        const id = pathParts.pop() || pathParts.pop();
        OrganizerService.getOrganizer(id).then(data => {
            if (data === null || data.hasOwnProperty("message")) {
                // TODO: error handling
            } else {
                this.setState({organizer: data})
            }
        });
    }

    toggleEditName = () => {
        if (this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id) {
            if (this.state.editingName) {
                this.props.updateOrganizer(this.state.organizer);
            }
            this.setState({editingName: !this.state.editingName});
        }
    };

    toggleEditDescription = () => {
        if (this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id) {
            if (this.state.editingDescription) {
                this.props.updateOrganizer(this.state.organizer);
            }
            this.setState({editingDescription: !this.state.editingDescription});
        }
    };

    toggleEditPhoneNumber = () => {
        if (this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id) {
            if (this.state.editingPhoneNumber) {
                this.props.updateOrganizer(this.state.organizer);
            }
            this.setState({editingPhoneNumber: !this.state.editingPhoneNumber});
        }
    };

    toggleEditEmail = () => {
        if (this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id) {
            if (this.state.editingEmail) {
                this.props.updateOrganizer(this.state.organizer);
            }
            this.setState({editingEmail: !this.state.editingEmail});
        }
    };

    toggleEditImage = () => {
        if (this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id) {
            if (this.state.editingImageUrl) {
                this.props.updateOrganizer(this.state.organizer);
            }
            this.setState({editingImageUrl: !this.state.editingImageUrl});
        }
    };

    toggleEditCompanyName = () => {
        if (this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id) {
            if (this.state.editingCompanyName) {
                this.props.updateOrganizer(this.state.organizer);
            }
            this.setState({editingCompanyName: !this.state.editingCompanyName});
        }
    };

    toggleEditCompanyURL = () => {
        if (this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id) {
            if (this.state.editingCompanyUrl) {
                this.props.updateOrganizer(this.state.organizer);
            }
            this.setState({editingCompanyUrl: !this.state.editingCompanyUrl});
        }
    };

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <h3 className="col-12">{this.state.organizer.company_name}</h3>
                    <div className="col-sm-3 col-12">
                        <img src={this.state.organizer.image_url}
                             onClick={!this.state.editingImageUrl ? this.toggleEditImage : () => {}}
                             className="rounded EB-profile-pic mb-3"
                             alt=""/>
                        {
                            this.state.editingImageUrl &&
                            <div className="d-flex mb-2">
                                <input className="form-control"
                                       placeholder="Image URL"
                                       type="text"
                                       value={this.state.organizer.image_url}
                                       onChange={(event) => this.setState({organizer: {...this.state.organizer, image_url: event.target.value}})}/>
                                <button className="btn btn-outline-success"
                                        onClick={this.toggleEditImage}>
                                    <i className="fa fa-check"/>
                                </button>
                            </div>
                        }
                    </div>

                    <div className="form-group col-sm-9 col-12">
                        <div className="d-flex align-items-center">
                            <label className="mr-2">Company Name:</label>
                            {
                                this.state.editingCompanyName &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Company Name"
                                           type="text"
                                           value={this.state.organizer.company_name}
                                           onChange={(event) => this.setState({organizer: {...this.state.organizer, company_name: event.target.value}})}/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditCompanyName}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingCompanyName &&
                                <label onClick={this.toggleEditCompanyName}>
                                    {this.state.organizer.company_name}
                                    {this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id &&
                                     <i className="fa fa-pencil EB-pencil"/>
                                    }
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Username:</label>
                            {
                                this.state.editingName &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Username"
                                           type="text"
                                           value={this.state.organizer.username}
                                           onChange={(event) => this.setState({organizer: {...this.state.organizer, username: event.target.value}})}/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditName}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingName &&
                                <label onClick={this.toggleEditName}>
                                    {this.state.organizer.username}
                                    {this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id &&
                                     <i className="fa fa-pencil EB-pencil"/>
                                    }
                                </label>
                            }
                        </div>

                            <div className="d-flex align-items-center">
                                <label className="mr-2">Description:</label>
                                {
                                    this.state.editingDescription &&
                                    <div className="d-flex">
                                        <input className="form-control"
                                               placeholder="Description"
                                               type="text"
                                               value={this.state.organizer.description}
                                               onChange={(event) => this.setState({organizer: {...this.state.organizer, description: event.target.value}})}/>
                                        <button className="btn btn-outline-success"
                                                onClick={this.toggleEditDescription}>
                                            <i className="fa fa-check"/>
                                        </button>
                                    </div>
                                }
                                {
                                    !this.state.editingDescription &&
                                    <label onClick={this.toggleEditDescription}>
                                        {this.state.organizer.description}
                                        {this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id &&
                                         <i className="fa fa-pencil EB-pencil"/>
                                        }
                                    </label>
                                }
                            </div>

                            <div className="d-flex align-items-center">
                                <label className="mr-2">Phone Number:</label>
                                {
                                    this.state.editingPhoneNumber &&
                                    <div className="d-flex">
                                        <input className="form-control"
                                               placeholder="Phone Number"
                                               type="number"
                                               value={this.state.organizer.phone_number}
                                               onChange={(event) => this.setState({organizer: {...this.state.organizer, phone_number: event.target.value}})}/>
                                        <button className="btn btn-outline-success"
                                                onClick={this.toggleEditPhoneNumber}>
                                            <i className="fa fa-check"/>
                                        </button>
                                    </div>
                                }
                                {
                                    !this.state.editingPhoneNumber &&
                                    <label onClick={this.toggleEditPhoneNumber}>
                                        {this.state.organizer.phone_number}
                                        {this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id &&
                                         <i className="fa fa-pencil EB-pencil"/>
                                        }
                                    </label>
                                }
                            </div>

                            <div className="d-flex align-items-center">
                                <label className="mr-2">Email:</label>
                                {
                                    this.state.editingEmail &&
                                    <div className="d-flex">
                                        <input className="form-control"
                                               placeholder="Email"
                                               type="email"
                                               value={this.state.organizer.email}
                                               onChange={(event) => this.setState({organizer: {...this.state.organizer, email: event.target.value}})}/>
                                        <button className="btn btn-outline-success"
                                                onClick={this.toggleEditEmail}>
                                            <i className="fa fa-check"/>
                                        </button>
                                    </div>
                                }
                                {
                                    !this.state.editingEmail &&
                                    <label onClick={this.toggleEditEmail}>
                                        {this.state.organizer.email}
                                        {this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id &&
                                         <i className="fa fa-pencil EB-pencil"/>
                                        }
                                    </label>
                                }
                            </div>

                            <div className="d-flex align-items-center">
                                <label className="mr-2">Company URL:</label>
                                {
                                    this.state.editingCompanyUrl &&
                                    <div className="d-flex">
                                        <input className="form-control"
                                               placeholder="Company URL"
                                               type="text"
                                               value={this.state.organizer.company_url}
                                               onChange={(event) => this.setState({organizer: {...this.state.organizer, company_url: event.target.value}})}/>
                                        <button className="btn btn-outline-success"
                                                onClick={this.toggleEditCompanyURL}>
                                            <i className="fa fa-check"/>
                                        </button>
                                    </div>
                                }
                                {
                                    !this.state.editingCompanyUrl &&
                                    <label onClick={this.toggleEditCompanyURL}>
                                        {this.state.organizer.company_url}
                                        {this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id &&
                                         <i className="fa fa-pencil EB-pencil"/>
                                        }
                                    </label>
                                }
                            </div>
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="row col-12 col-sm-6 d-inline">
                        <div className="d-flex">
                            <h4 className="">Events</h4>
                            <Link to='/event/new'>
                                <div className="ml-2 EB-add-circle">
                                    <i className="fa fa-plus"/>
                                </div>
                            </Link>
                        </div>
                        <div className=" EB-scroll-list">
                            <OPEventListComponent/>
                        </div>
                    </div>
                    <div className="row col-12 col-sm-6  d-inline ">
                        <div className="d-flex">
                            <h4 className="">Venues</h4>
                            <Link to='/venue/new'>
                                <div className="ml-2 EB-add-circle">
                                    <i className="fa fa-plus"/>
                                </div>
                            </Link>
                        </div>
                        <div className="EB-scroll-list">
                            <OPVenueListComponent/>
                        </div>
                    </div>
                </div>
                {
                    this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id &&
                    <Link to='/event/search'>
                        <button className="btn btn-dark mt-3" onClick={() => this.props.resetState()}>
                            Logout
                        </button>
                    </Link>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    organizer: state.OrganizerReducer.organizer
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateOrganizer: async (organizer) => {
            const data = await OrganizerService.updateOrganizer(organizer._id, organizer);
            dispatch(updateOrganizer(data))
        },
        resetState: () => {
            window.sessionStorage.clear();
            dispatch(resetAction())
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(OrganizerProfileComponent);