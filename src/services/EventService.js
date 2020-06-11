import {API_URL} from "../common/Constants";

export default {

    getEvents : (params) => {
        return fetch(API_URL + "/events/search?" + new URLSearchParams(params)).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    getEvent : (eventId) => {
        return fetch(`${API_URL}/events/${eventId}`).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    getExternalEvent : (externalEventId) => {
        return fetch(`${API_URL}/events/external/${externalEventId}`).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    createEvent : (event) => {
        return fetch(`${API_URL}/events/`, {
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
        return fetch(`${API_URL}/events/${eventId}`, {
            method: 'DELETE',
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    updateEvent : (eventId, event) => {
        return fetch(`${API_URL}/events/${eventId}`, {
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
        return fetch(`${API_URL}/events/${eventId}/attendee/${attendeeId}`, {
            method: 'POST'
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    removeEventAttendee : (eventId, attendeeId) => {
        return fetch(`${API_URL}/events/${eventId}/attendee/${attendeeId}`, {
            method: 'DELETE'
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    }
}