const apiKey = "JXfugI8vtmG4dlSSSa1CUyzGeMa91d9V";

const url = (endpoint, params) => {
    params.apikey = apiKey;
    return "https://app.ticketmaster.com/discovery/v2"
           + `${endpoint}.json?`
           + new URLSearchParams(params);
};

export default {

    getEvents : (params) => {
        return fetch(url("/events", params)).then(res => {
            return res.json();
        });
    },

    getEvent : (_id) => {
        return fetch(url(`/events/${_id}`, {})).then(res => {
            return res.json();
        });
    },

}