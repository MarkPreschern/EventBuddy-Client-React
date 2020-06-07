import {API_URL} from "../common/Constants";

export default {

    getAttendee : (attendeeId) => {
        fetch(`${API_URL}/attendees/${attendeeId}`).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    createAttendee : (attendee) => {
        fetch(`${API_URL}/attendees/`, {
            method: 'POST',
            body: JSON.stringify(attendee),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    deleteAttendee : (attendeeId) => {
        fetch(`${API_URL}/attendees/${attendeeId}`, {
            method: 'DELETE',
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    updateAttendee : (attendeeId, attendee) => {
        fetch(`${API_URL}/attendees/${attendeeId}`, {
            method: 'PUT',
            body: JSON.stringify(attendee),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    addLikedEvent : (attendeeId, eventId) => {
        fetch(`${API_URL}/attendees/${attendeeId}/event/${eventId}`, {
            method: 'POST'
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    removeLikedEvent : (attendeeId, eventId) => {
        fetch(`${API_URL}/attendees/${attendeeId}/event/${eventId}`, {
            method: 'DELETE'
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    loginAttendee : (attendee) => {
        fetch(`${API_URL}/attendees/login`, {
            method: 'POST',
            body: JSON.stringify(attendee),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },
}