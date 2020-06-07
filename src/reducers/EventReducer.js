import {
    GET_EVENTS,
    CREATE_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT,
} from "../actions/EventActions";

const initialState = {
    events: []
};

const eventReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_EVENTS:
            return {
                events: action.events
            };
        case CREATE_EVENT:
            return {
                events: [
                    ...state.events,
                    action.newEvent
                ]
            };
        case UPDATE_EVENT:
            return {
                events: state.events.map(event => {
                    return (event._id === action.eventId) ? action.event : event
                })
            };
        case DELETE_EVENT:
            return {
                events: state.events.filter(event => event._id !== action.eventId)
            };
        default:
            return state
    }
};

export default eventReducer