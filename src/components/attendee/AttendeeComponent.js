import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import AttendeeEventListComponent from "./AttendeeEventListComponent";
import AttendeeMessageListComponent from "./AttendeeMessageListComponent";
import AttendeeService from "../../services/AttendeeService";
import {updateAttendee} from "../../actions/AttendeeActions";
import {resetAction} from "../../actions/RootActions";
import {selectConversation} from "../../actions/ConversationActions";
import ConversationService from "../../services/ConversationService";
import {
    DEFAULT_PROFILE_FEMALE_IMAGE_URL,
    DEFAULT_PROFILE_MALE_IMAGE_URL, DEFAULT_PROFILE_OTHER_IMAGE_URL
} from "../../common/Constants";

class AttendeeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            attendee: {_id: -1},

            editingName: false,
            editingUsername: false,
            editingPhoneNumber: false,
            editingEmail: false,
            editingBirthday: false,
            editingGender: false,
            editingImageUrl: false
        };
    }

    componentDidMount() {
        const pathParts = window.location.pathname.split('/');
        const id = pathParts.pop() || pathParts.pop();
        AttendeeService.getAttendee(id).then(data => {
            if (data.hasOwnProperty("message")) {
                // TODO: error handling
            } else {
                this.setState({attendee: data})
            }
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.attendee._id !== this.props.attendee._id) {
            const pathParts = window.location.pathname.split('/');
            const id = pathParts.pop() || pathParts.pop();
            AttendeeService.getAttendee(id).then(data => {
                if (data.hasOwnProperty("message")) {
                    // TODO: error handling
                } else {
                    this.setState({attendee: data})
                }
            });
        }
    }

    message = async () => {
        // if the sender & receiver don't already have a conversation history
        let existingConversations = this.props.attendee.conversations.filter(conversation => conversation.receiver._id === this.state.attendee._id);
        if (existingConversations.length === 0) {
            let conversation = {
                sender: this.props.attendee,
                receiver: this.state.attendee
            };
            const data = await ConversationService.createConversation(this.props.attendee._id, conversation);
            if (data.hasOwnProperty("message")) {
                // TODO: error handling
            } else {
                this.props.selectConversation(data);
                this.props.history.push(`/attendee/${this.props.attendee._id}/messages/${data._id}`)
            }
        } else {
            const data = await ConversationService.getConversation(this.props.attendee._id, existingConversations[0]._id);
            if (data.hasOwnProperty("message")) {
                console.log(data);
                // TODO: error handling
            } else {
                this.props.selectConversation(data);
                this.props.history.push(`/attendee/${this.props.attendee._id}/messages/${data._id}`)
            }
        }
    };

    toggleEditName = () => {
        if (this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id) {
            if (this.state.editingName) {
                this.props.updateAttendee(this.state.attendee);
            }
            this.setState({editingName: !this.state.editingName});
        }
    };

    toggleEditUsername = () => {
        if (this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id) {
            if (this.state.editingUsername) {
                this.props.updateAttendee(this.state.attendee);
            }
            this.setState({editingUsername: !this.state.editingUsername});
        }
    };

    toggleEditPhoneNumber = () => {
        if (this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id) {
            if (this.state.editingPhoneNumber) {
                this.props.updateAttendee(this.state.attendee);
            }
            this.setState({editingPhoneNumber: !this.state.editingPhoneNumber});
        }
    };

    toggleEditEmail = () => {
        if (this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id) {
            if (this.state.editingEmail) {
                this.props.updateAttendee(this.state.attendee);
            }
            this.setState({editingEmail: !this.state.editingEmail});
        }
    };

    toggleEditBirthday = () => {
        if (this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id) {
            if (this.state.editingBirthday) {
                this.props.updateAttendee(this.state.attendee);
            }
            this.setState({editingBirthday: !this.state.editingBirthday});
        }
    };

    toggleEditGender = () => {
        if (this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id) {
            if (this.state.editingGender) {
                this.props.updateAttendee(this.state.attendee);
            }
            this.setState({editingGender: !this.state.editingGender});
        }
    };

    toggleEditImage = () => {
        if (this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id) {
            if (this.state.editingImageUrl) {
                this.props.updateAttendee(this.state.attendee);
            }
            this.setState({editingImageUrl: !this.state.editingImageUrl});
        }
    };

    defaultImage = () => {
        if (this.state.attendee.gender === "Male") {
            return DEFAULT_PROFILE_MALE_IMAGE_URL;
        } else if (this.state.attendee.gender === "Female") {
            return DEFAULT_PROFILE_FEMALE_IMAGE_URL;
        } else {
            return DEFAULT_PROFILE_OTHER_IMAGE_URL;
        }
    };

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <h3 className="col-12">{this.state.attendee.name}</h3>
                    <div className="col-sm-3 col-12">
                        {
                            this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id && !this.state.editingImageUrl &&
                            <div className="text-center">
                                {
                                    !(this.state.attendee.image_url === '' || this.state.attendee.image_url === undefined)  ?
                                    <img src={this.state.attendee.image_url}
                                         onClick={!this.state.editingImageUrl ? this.toggleEditImage : () => {}}
                                         className="rounded EB-profile-pic mb-3 EB-margin-bottom-0"
                                         alt=""/>
                                         :
                                    <img src={this.defaultImage()}
                                         onClick={!this.state.editingImageUrl ? this.toggleEditImage : () => {}}
                                         className="rounded EB-profile-pic mb-3 EB-margin-bottom-0"
                                         alt=""/>
                                }
                                <button className="btn"
                                        onClick={!this.state.editingImageUrl ? this.toggleEditImage : () => {}}>
                                    <small>Picture URL</small>
                                    <i className="fa fa-pencil ml-2"/>
                                </button>
                            </div>
                        }
                        {
                            this.props.attendee._id !== this.state.attendee._id &&
                            <div className="text-center">
                                {
                                    !(this.state.attendee.image_url === '' || this.state.attendee.image_url === undefined)  ?
                                    <img src={this.state.attendee.image_url}
                                         className="rounded EB-profile-pic mb-3"
                                         alt=""/>
                                                                                                                            :
                                    <img src={this.defaultImage()}
                                         className="rounded EB-profile-pic mb-3"
                                         alt=""/>
                                }
                            </div>
                        }
                        {
                            this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id && this.state.editingImageUrl &&
                            <div className="d-flex mr-4">
                                <input className="form-control"
                                       placeholder="Image URL"
                                       type="text"
                                       value={this.state.attendee.image_url}
                                       onChange={(event) => this.setState({attendee: {...this.state.attendee, image_url: event.target.value}})}/>
                                <button className="btn btn-outline-success"
                                        onClick={this.toggleEditImage}>
                                    <i className="fa fa-check"/>
                                </button>
                            </div>
                        }
                    </div>
                    <div className="form-group col-sm-9 col-12">
                        <div className="d-flex align-items-center">
                            <label className="mr-2">Name:</label>
                            {
                                this.state.editingName &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Display name"
                                           type="text"
                                           value={this.state.attendee.name}
                                           onChange={(event) => this.setState({attendee: {...this.state.attendee, name: event.target.value}})}/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditName}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingName &&
                                <label onClick={this.toggleEditName}>
                                    {this.state.attendee.name}
                                    {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                     <i className="fa fa-pencil EB-pencil"/>
                                    }
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Username:</label>
                            {
                                this.state.editingUsername &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           placeholder="Username"
                                           type="text"
                                           value={this.state.attendee.username}
                                           onChange={(event) => this.setState({attendee: {...this.state.attendee, username: event.target.value}})}/>
                                    <button className="btn btn-outline-success"
                                        onClick={this.toggleEditUsername}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingUsername &&
                                <label onClick={this.toggleEditUsername}>
                                    {this.state.attendee.username}
                                    {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                     <i className="fa fa-pencil EB-pencil"/>
                                    }
                                </label>
                            }
                        </div>

                        {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                         <div className="d-flex align-items-center">
                             <label className="mr-2">Phone Number:</label>
                             {
                                 this.state.editingPhoneNumber &&
                                 <div className="d-flex">
                                     <input className="form-control"
                                            placeholder="Username"
                                            type="text"
                                            value={this.state.attendee.phone_number}
                                            onChange={(event) => this.setState({attendee: {...this.state.attendee, phone_number: event.target.value}})}/>
                                     <button className="btn btn-outline-success"
                                             onClick={this.toggleEditPhoneNumber}>
                                         <i className="fa fa-check"/>
                                     </button>
                                 </div>
                             }
                             {
                                 !this.state.editingPhoneNumber &&
                                 <label onClick={this.toggleEditPhoneNumber}>
                                     {this.state.attendee.phone_number}
                                     {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                      <i className="fa fa-pencil EB-pencil"/>
                                     }
                                 </label>
                             }
                         </div>
                        }

                        {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                         <div className="d-flex align-items-center">
                             <label className="mr-2">Email:</label>
                             {
                                 this.state.editingEmail &&
                                 <div className="d-flex">
                                     <input className="form-control"
                                            placeholder="Username"
                                            type="text"
                                            value={this.state.attendee.email}
                                            onChange={(event) => this.setState({attendee: {...this.state.attendee, email: event.target.value}})}/>
                                     <button className="btn btn-outline-success"
                                             onClick={this.toggleEditEmail}>
                                         <i className="fa fa-check"/>
                                     </button>
                                 </div>
                             }
                             {
                                 !this.state.editingEmail &&
                                 <label onClick={this.toggleEditEmail}>
                                     {this.state.attendee.email}
                                     {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                      <i className="fa fa-pencil EB-pencil"/>
                                     }
                                 </label>
                             }
                         </div>
                        }

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Gender:</label>
                            {
                                this.state.editingGender &&
                                <div className="d-flex">
                                    <select className="form-control"
                                           placeholder="Username">
                                        <option value="m" onClick={() => this.setState({attendee: {...this.state.attendee, gender: "Male"}})}>Male</option>
                                        <option value="f" onClick={() => this.setState({attendee: {...this.state.attendee, gender: "Female"}})}>Female</option>
                                        <option value="x" onClick={() => this.setState({attendee: {...this.state.attendee, gender: "Other"}})}>Other</option>
                                    </select>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditGender}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingGender &&
                                <label onClick={this.toggleEditGender}>
                                    {this.state.attendee.gender}
                                    {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                     <i className="fa fa-pencil EB-pencil"/>
                                    }
                                </label>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <label className="mr-2">Birthday:</label>
                            {
                                this.state.editingBirthday &&
                                <div className="d-flex">
                                    <input className="form-control"
                                           type="date"
                                           value={this.state.attendee.dob}
                                           onChange={(event) => this.setState({attendee: {...this.state.attendee, dob: event.target.value}})}/>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditBirthday}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingBirthday &&
                                <label onClick={this.toggleEditBirthday}>
                                    {this.state.attendee.dob === undefined ? "" : this.state.attendee.dob.split('T')[0]}
                                    {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                     <i className="fa fa-pencil EB-pencil"/>
                                    }
                                </label>
                            }
                        </div>
                        {
                            this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                            <Link to={`/attendee/${this.props.attendee._id}/messages/-1`}>
                                <button className="btn btn-dark d-block align-items-center">
                                    Messages
                                </button>
                            </Link>
                        }
                        {
                            this.props.attendee._id !== -1 && this.props.attendee._id !== this.state.attendee._id &&
                            <button className="btn btn-dark d-block align-items-center" onClick={() => this.message()}>
                                Message
                            </button>
                        }
                    </div>
                </div>

                <div className="row mb-3">
                    {
                        this.state.attendee.hasOwnProperty("events_liked") && this.state.attendee.events_liked.length > 0 &&
                        <div className="row col-12 d-inline">
                            <h4>Liked events</h4>
                            <div className="EB-scroll-list">
                                <AttendeeEventListComponent events={this.state.attendee.events_liked}/>
                            </div>
                        </div>
                    }
                    {
                        this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                        this.props.attendee.hasOwnProperty("messages") && this.props.attendee.messages.length > 0 &&
                        <div className="row col-12 d-inline">
                            <Link to="/messages">
                                <h4>Messages</h4>
                            </Link>
                            <div className="EB-scroll-list">
                                <AttendeeMessageListComponent/>
                            </div>
                        </div>
                    }
                </div>
                {
                    this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
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
    attendee: state.AttendeeReducer.attendee
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateAttendee: async (attendee) => {
            const data = await AttendeeService.updateAttendee(attendee._id, attendee);
            dispatch(updateAttendee(data))
        },
        selectConversation: (conversation) => {
            dispatch(selectConversation(conversation))
        },
        resetState: () => {
            window.sessionStorage.clear();
            dispatch(resetAction())
        },
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(AttendeeComponent);