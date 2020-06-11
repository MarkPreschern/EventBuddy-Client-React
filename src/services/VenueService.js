import {API_URL} from "../common/Constants";

export default {

    getVenue : (organizerId, venueId) => {
        return fetch(`${API_URL}/organizers/${organizerId}/venues/${venueId}`).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    createVenue : (organizerId, venue) => {
        return fetch(`${API_URL}/organizers/${organizerId}/venues/`, {
            method: 'POST',
            body: JSON.stringify(venue),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    deleteVenue : (organizerId, venueId) => {
        return fetch(`${API_URL}/organizers/${organizerId}/venues/${venueId}`, {
            method: 'DELETE',
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    updateVenue : (organizerId, venueId, venue) => {
        return fetch(`${API_URL}/organizers/${organizerId}/venues/${venueId}`, {
            method: 'PUT',
            body: JSON.stringify(venue),
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