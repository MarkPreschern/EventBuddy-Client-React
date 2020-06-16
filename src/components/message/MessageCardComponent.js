import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {selectConversation} from "../../actions/ConversationActions";

class MessageCardComponent extends React.Component {
    render() {
        return(
            <Link to={`/attendee/${this.props.attendee._id}/messages/${this.props.conversation._id}`}
                  onClick={() => this.props.selectConversation(this.props.conversation)}>
                <div className="card EB-contact-card d-flex flex-row align-items-center">
                    <img className="EB-contact-img" src={this.props.conversation.receiver.image_url} alt="..."/>
                    <h6 className="ml-2 mt-2">{this.props.conversation.receiver.name}</h6>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = state => ({
    attendee: state.AttendeeReducer.attendee
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectConversation: (conversation) => {
            dispatch(selectConversation(conversation))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(MessageCardComponent);