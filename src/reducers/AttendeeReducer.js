import {
    GET_ATTENDEES,
    CREATE_ATTENDEE,
    DELETE_ATTENDEE,
    UPDATE_ATTENDEE,
    SELECT_ATTENDEE
} from "../actions/AttendeeActions";
import {SELECT_EVENT} from "../actions/EventActions";

const initialState = {
    attendee: {_id: -1},
    attendees: []
};

const attendeeReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_ATTENDEES:
            return {
                attendee: state.attendee,
                attendees: action.attendees
            };
        case CREATE_ATTENDEE:
            return {
                attendee: state.attendee,
                attendees: [
                    ...state.attendees,
                    action.newAttendee
                ]
            };
        case UPDATE_ATTENDEE:
            return {
                attendee: state.attendee,
                attendees: state.attendees.map(attendee => {
                    return (attendee._id === action.attendeeId) ? action.attendee : attendee
                })
            };
        case DELETE_ATTENDEE:
            return {
                attendee: state.attendee,
                attendees: state.attendees.filter(attendee => attendee._id !== action.attendeeId)
            };
        case SELECT_ATTENDEE:
            return {
                attendee: action.attendee,
                attendees: state.attendee
            };
        default:
            return state
    }
};

export default attendeeReducer