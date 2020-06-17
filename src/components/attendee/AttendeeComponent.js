import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import AttendeeEventListComponent from "./AttendeeEventListComponent";
import AttendeeService from "../../services/AttendeeService";
import {updateAttendee} from "../../actions/AttendeeActions";
import {resetAction} from "../../actions/RootActions";
import {selectConversation} from "../../actions/ConversationActions";
import ConversationService from "../../services/ConversationService";
import {showAlert} from "../../actions/AlertActions";
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
                this.props.showAlert(data.message.msgBody);
            } else {
                this.setState({attendee: data})
            }
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.attendee._id !== this.state.attendee._id) {
            const pathParts = window.location.pathname.split('/');
            const id = pathParts.pop() || pathParts.pop();
            AttendeeService.getAttendee(id).then(data => {
                if (data.hasOwnProperty("message")) {
                    this.props.showAlert(data.message.msgBody);
                } else {
                    this.setState({attendee: data})
                }
            });
        }
    }

    message = async () => {
        // if the sender & receiver don't already have a conversation history
        let existingConversations = this.props.attendee.conversations.filter(conversation => {
            return (conversation.sender._id === this.state.attendee._id || conversation.receiver._id === this.state.attendee._id);
        });
        if (existingConversations.length === 0) {
            let conversation = {
                sender: this.props.attendee,
                receiver: this.state.attendee
            };
            const data = await ConversationService.createConversation(this.props.attendee._id, conversation);
            if (data.hasOwnProperty("message")) {
                this.props.showAlert(data.message.msgBody);
            } else {
                AttendeeService.getAttendee(this.props.attendee._id).then(attendee => {
                    if (attendee.hasOwnProperty("message")) {
                        this.props.showAlert(attendee.message.msgBody);
                    } else {
                        this.props.updateAttendee(attendee);
                        this.props.history.push(`/attendee/${this.props.attendee._id}/messages/${data._id}`)
                    }
                });
            }
        } else {
            this.props.history.push(`/attendee/${this.props.attendee._id}/messages/${existingConversations[0]._id}`)
        }
    };

    messages = async () => {
        if (this.props.attendee.conversations.length > 0) {
            const data = await ConversationService.getConversation(this.props.attendee._id, this.props.attendee.conversations[0]._id);
            if (data.hasOwnProperty("message")) {
                this.props.showAlert(data.message.msgBody);
            } else {
                await this.props.selectConversation(data);
                this.props.history.push(`/attendee/${this.props.attendee._id}/messages`);
            }
        } else {
            this.props.history.push(`/attendee/${this.props.attendee._id}/messages`);
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
                            <span>
                                Paste a URL of an image here!
                                <div className="form-row">
                                    <input className="form-control col-12"
                                           placeholder="Image URL"
                                           type="text"
                                           value={this.state.attendee.image_url}
                                           onChange={(event) => this.setState({attendee: {...this.state.attendee, image_url: event.target.value}})}/>
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
                                <label >
                                    {this.state.attendee.name}
                                    {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                     <i onClick={this.toggleEditName}
                                        className="fa fa-pencil EB-pencil"/>
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
                                <label >
                                    {this.state.attendee.username}
                                    {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                     <i onClick={this.toggleEditUsername}
                                        className="fa fa-pencil EB-pencil"/>
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
                                 <label >
                                     {this.state.attendee.phone_number}
                                     {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                      <i onClick={this.toggleEditPhoneNumber}
                                         className="fa fa-pencil EB-pencil"/>
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
                                 <label >
                                     {this.state.attendee.email}
                                     {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                      <i onClick={this.toggleEditEmail}
                                         className="fa fa-pencil EB-pencil"/>
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
                                    <select defaultValue={this.state.attendee.gender}
                                        className="form-control"
                                        onChange={(event) => this.setState({attendee: {...this.state.attendee, gender: event.target.value}})}>
                                        <option value="Male" onClick={() => this.setState({attendee: {...this.state.attendee, gender: "Male"}})}>Male</option>
                                        <option value="Female" onClick={() => this.setState({attendee: {...this.state.attendee, gender: "Female"}})}>Female</option>
                                        <option value="Other" onClick={() => this.setState({attendee: {...this.state.attendee, gender: "Other"}})}>Other</option>
                                    </select>
                                    <button className="btn btn-outline-success"
                                            onClick={this.toggleEditGender}>
                                        <i className="fa fa-check"/>
                                    </button>
                                </div>
                            }
                            {
                                !this.state.editingGender &&
                                <label >
                                    {this.state.attendee.gender}
                                    {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                     <i onClick={this.toggleEditGender}
                                        className="fa fa-pencil EB-pencil"/>
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
                                <label >
                                    {this.state.attendee.dob === undefined ? "" : this.state.attendee.dob.split('T')[0]}
                                    {this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                                     <i onClick={this.toggleEditBirthday}
                                        className="fa fa-pencil EB-pencil"/>
                                    }
                                </label>
                            }
                        </div>
                        {
                            this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                            <button className="btn btn-dark align-items-center" onClick={() => this.messages()}>
                                Messages
                            </button>
                        }
                        {
                            this.props.attendee._id !== -1 && this.props.attendee._id !== this.state.attendee._id &&
                            <button className="btn btn-dark align-items-center" onClick={() => this.message()}>
                                Message
                            </button>
                        }
                    </div>
                </div>

                <div className="row mb-3">
                    {
                        this.state.attendee.hasOwnProperty("events_liked") && this.state.attendee.events_liked.length > 0 ?
                        <div className="row col-12 d-inline">
                            <h4>Liked events</h4>
                            <div className="EB-scroll-list">
                                <AttendeeEventListComponent events={this.state.attendee.events_liked}/>
                            </div>
                        </div>
                        :
                        <div className="row col-12 d-inline text-center mt-3 mb-3 ">
                            <div>
                                You didn't like any event :(<br/>
                                <Link to='/event/search/results'>
                                    <button className="btn btn-outline-info">
                                        Click here to browse through some of our recommendations!
                                    </button>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
                {
                    this.props.attendee._id !== -1 && this.props.attendee._id === this.state.attendee._id &&
                    <Link to='/event/search/results'>
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
        showAlert: (message) => {
            dispatch(showAlert(message))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(AttendeeComponent);