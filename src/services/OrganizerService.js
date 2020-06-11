import {API_URL} from "../common/Constants";

export default {

    getOrganizer : (organizerId) => {
        return fetch(`${API_URL}/organizers/${organizerId}`).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    createOrganizer : (organizer) => {
        return fetch(`${API_URL}/organizers/`, {
            method: 'POST',
            body: JSON.stringify(organizer),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    deleteOrganizer : (organizerId) => {
        return fetch(`${API_URL}/organizers/${organizerId}`, {
            method: 'DELETE',
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    updateOrganizer : (organizerId, organizer) => {
        return fetch(`${API_URL}/organizers/${organizerId}`, {
            method: 'PUT',
            body: JSON.stringify(organizer),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
    },

    loginOrganizer : (organizer) => {
        return fetch(`${API_URL}/organizers/login`, {
            method: 'POST',
            body: JSON.stringify(organizer),
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