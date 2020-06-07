import {API_URL} from "../common/Constants";

export default {

    getMessage : (attendeeId, conversationId, messageId) => {
        fetch(`${API_URL}/attendees/${attendeeId}/conversations/${conversationId}/messages/${messageId}`).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    createMessage : (attendeeId, conversation) => {
        fetch(`${API_URL}/attendees/${attendeeId}/conversations/${conversationId}/messages/`, {
            method: 'POST',
            body: JSON.stringify(conversation),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    deleteMessage : (attendeeId, conversationId, messageId) => {
        fetch(`${API_URL}/attendees/${attendeeId}/conversations/${conversationId}/messages/${messageId}`, {
            method: 'DELETE',
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    updateMessage : (attendeeId, conversationId, messageId, message) => {
        fetch(`${API_URL}/attendees/${attendeeId}/conversations/${conversationId}/messages/${messageId}`, {
            method: 'PUT',
            body: JSON.stringify(message),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    }
}