import {API_URL} from "../common/Constants";

export default {

    getConversation : (attendeeId, conversationId) => {
        return fetch(`${API_URL}/attendees/${attendeeId}/conversations/${conversationId}`).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    createConversation : (attendeeId, conversation) => {
        return fetch(`${API_URL}/attendees/${attendeeId}/conversations/`, {
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

    deleteConversation : (attendeeId, conversationId) => {
        return fetch(`${API_URL}/attendees/${attendeeId}/conversations/${conversationId}`, {
            method: 'DELETE',
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    updateConversation : (attendeeId, conversationId, conversation) => {
        return fetch(`${API_URL}/attendees/${attendeeId}/conversations/${conversationId}`, {
            method: 'PUT',
            body: JSON.stringify(conversation),
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