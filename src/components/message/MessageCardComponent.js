import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {selectConversation} from "../../actions/ConversationActions";
import {
    DEFAULT_PROFILE_FEMALE_IMAGE_URL,
    DEFAULT_PROFILE_MALE_IMAGE_URL, DEFAULT_PROFILE_OTHER_IMAGE_URL
} from "../../common/Constants";

class MessageCardComponent extends React.Component {
    selected = () => {
        return (this.props.selectedConversation !== undefined
                && this.props.selectedConversation._id !== -1
                && this.props.selectedConversation._id === this.props.conversation._id) ? "EB-contact-card-middle EB-conversation-selected" : "EB-contact-card-middle";
    };

    defaultImage = (gender) => {
        if (gender === "Male") {
            return DEFAULT_PROFILE_MALE_IMAGE_URL;
        } else if (gender === "Female") {
            return DEFAULT_PROFILE_FEMALE_IMAGE_URL;
        } else {
            return DEFAULT_PROFILE_OTHER_IMAGE_URL;
        }
    };

    render() {
        return(
            <div className={this.selected()}>
                <Link to={`/attendee/${this.props.attendee._id}/messages/${this.props.conversation._id}`}
                      onClick={() => this.props.selectConversation(this.props.attendee.conversations.find(convo => convo._id === this.props.conversation._id))}>
                    <div className="card EB-contact-card d-flex flex-row align-items-center">
                        {
                            this.props.conversation.sender._id === this.props.attendee._id ?
                            <div>
                                {
                                    !(this.props.conversation.receiver.image_url === '' || this.props.conversation.receiver.image_url === undefined)  ?
                                    <img className="EB-contact-img"
                                         src={this.props.conversation.receiver.image_url} alt=""/>
                                         :
                                    <img src={this.defaultImage(this.props.conversation.receiver.gender)}
                                         className="EB-contact-img"
                                         alt=""/>
                                }
                            </div>
                            :
                            <div>
                                {
                                    !(this.props.conversation.sender.image_url === '' || this.props.conversation.sender.image_url === undefined)  ?
                                    <img className="EB-contact-img"
                                         src={this.props.conversation.sender.image_url} alt=""/>
                                                                                                                                                      :
                                    <img src={this.defaultImage(this.props.conversation.sender.gender)}
                                         className="EB-contact-img"
                                         alt=""/>
                                }
                            </div>
                        }
                        <h6 className="ml-2 mt-2">
                            {this.props.conversation.sender._id === this.props.attendee._id ?
                             this.props.conversation.receiver.name :
                             this.props.conversation.sender.name}
                        </h6>
                    </div>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    attendee: state.AttendeeReducer.attendee,
    selectedConversation: state.ConversationReducer.conversation
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectConversation: (conversation) => {
            dispatch(selectConversation(conversation))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(MessageCardComponent);