export default {

    getEvents : () => {
        return fetch("https://app.ticketmaster.com/discovery/v2/events")
            .then(res => res.json())
            .then(data => data);
    },

}