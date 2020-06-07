import {API_URL} from "../common/Constants";

export default {

    getEvents : (params) => {
        fetch(API_URL + "/events/" + new URLSearchParams(params)).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    getEvent : (eventId) => {
        fetch(`${API_URL}/events/${eventId}`).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    getExternalEvent : (externalEventId) => {
        fetch(`${API_URL}/events/external/${externalEventId}`).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    createEvent : (event) => {
        fetch(`${API_URL}/events/`, {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    deleteEvent : (eventId) => {
        fetch(`${API_URL}/events/${eventId}`, {
            method: 'DELETE',
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    updateEvent : (eventId, event) => {
        fetch(`${API_URL}/events/${eventId}`, {
            method: 'PUT',
            body: JSON.stringify(event),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    addEventAttendee : (eventId, attendeeId) => {
        fetch(`${API_URL}/events/${eventId}/attendee/${attendeeId}`, {
            method: 'POST'
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    removeEventAttendee : (eventId, attendeeId) => {
        fetch(`${API_URL}/events/${eventId}/attendee/${attendeeId}`, {
            method: 'DELETE'
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    }
}