import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import OrganizerEventListComponent from "./OrganizerEventListComponent";
import OrganizerVenueListComponent from "./OrganizerVenueListComponent";
import {updateOrganizer} from "../../actions/OrganizerActions";
import OrganizerService from "../../services/OrganizerService";
import {resetAction} from "../../actions/RootActions";
import {showAlert} from "../../actions/AlertActions";
import {
    DEFAULT_PROFILE_FEMALE_IMAGE_URL,
    DEFAULT_PROFILE_MALE_IMAGE_URL, DEFAULT_PROFILE_OTHER_IMAGE_URL
} from "../../common/Constants";

class OrganizerComponent extends React.Component {
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
                this.props.showAlert(data === null ? "" : data.message.msgBody);
            } else {
                this.setState({organizer: data})
            }
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.organizer._id !== this.props.organizer._id) {
            const pathParts = window.location.pathname.split('/');
            const id = pathParts.pop() || pathParts.pop();
            OrganizerService.getOrganizer(id).then(data => {
                if (data === null || data.hasOwnProperty("message")) {
                    this.props.showAlert(data === null ? "" : data.message.msgBody);
                } else {
                    this.setState({organizer: data})
                }
            });
        }
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

    defaultImage = () => {
        if (this.state.organizer.gender === "Male") {
            return DEFAULT_PROFILE_MALE_IMAGE_URL;
        } else if (this.state.organizer.gender === "Female") {
            return DEFAULT_PROFILE_FEMALE_IMAGE_URL;
        } else {
            return DEFAULT_PROFILE_OTHER_IMAGE_URL;
        }
    };

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <h3 className="col-12">{this.state.organizer.company_name}</h3>
                    <div className="col-sm-3 col-12">
                        {
                            !this.state.editingImageUrl &&
                            <div className="text-center">
                                {
                                    !(this.state.organizer.image_url === '' || this.state.organizer.image_url === undefined)  ?
                                    <img src={this.state.organizer.image_url}
                                         onClick={!this.state.editingImageUrl ? this.toggleEditImage : () => {}}
                                         className="rounded EB-profile-pic mb-3 EB-margin-bottom-0"
                                         alt=""/>
                                         :
                                    <img src={this.defaultImage()}
                                         onClick={!this.state.editingImageUrl ? this.toggleEditImage : () => {}}
                                         className="rounded EB-profile-pic mb-3 EB-margin-bottom-0"
                                         alt=""/>
                                }
                                {
                                    this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id &&
                                    <button className="btn"
                                            onClick={!this.state.editingImageUrl ? this.toggleEditImage : () => {}}>
                                        <small>Picture URL</small>
                                        <i className="fa fa-pencil ml-2"/>
                                    </button>
                                }
                            </div>
                        }
                        {
                            this.state.editingImageUrl &&
                            <span>
                                Paste a URL of an image here!
                                <div className="form-row">
                                    <input className="form-control col-12"
                                           placeholder="Image URL"
                                           type="text"
                                           value={this.state.organizer.image_url}
                                           onChange={(event) => this.setState({organizer: {...this.state.organizer, image_url: event.target.value}})}/>
                                    <button className="btn btn-outline-success col-12"
                                            onClick={this.toggleEditImage}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            </span>
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
                            {
                                this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id &&
                                <Link to='/event/new'>
                                    <div className="ml-2 EB-add-circle">
                                        <i className="fa fa-plus"/>
                                    </div>
                                </Link>
                            }
                        </div>
                        <div className="EB-scroll-list">
                            <OrganizerEventListComponent events={this.state.organizer.events}/>
                        </div>
                    </div>
                    <div className="row col-12 col-sm-6 d-inline">
                        <div className="d-flex">
                            <h4 className="">Venues</h4>
                            {
                                this.props.organizer._id !== -1 && this.props.organizer._id === this.state.organizer._id &&
                                <Link to='/venue/new'>
                                    <div className="ml-2 EB-add-circle">
                                        <i className="fa fa-plus"/>
                                    </div>
                                </Link>
                            }
                        </div>
                        <div className="">
                            <OrganizerVenueListComponent venues={this.state.organizer.venues}/>
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
        },
        showAlert: (message) => {
            dispatch(showAlert(message))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(OrganizerComponent);