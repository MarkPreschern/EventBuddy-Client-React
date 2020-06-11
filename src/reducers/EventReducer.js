import {
    GET_EVENTS,
    CREATE_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT,
    SELECT_EVENT,
} from "../actions/EventActions";

const initialState = {
    event: {_id: -1},
    events: []
};

const eventReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_EVENTS:
            return {
                event: state.event,
                events: action.events
            };
        case CREATE_EVENT:
            return {
                event: state.event,
                events: [
                    ...state.events,
                    action.newEvent
                ]
            };
        case UPDATE_EVENT:
            return {
                event: state.event,
                events: state.events.map(event => {
                    return (event._id === action.eventId) ? action.event : event
                })
            };
        case DELETE_EVENT:
            return {
                event: state.event,
                events: state.events.filter(event => event._id !== action.eventId)
            };
        case SELECT_EVENT:
            return {
                event: action.event,
                events: state.events
            };
        default:
            return state
    }
};

export default eventReducer