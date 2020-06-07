import {
    GET_ATTENDEES,
    CREATE_ATTENDEE,
    DELETE_ATTENDEE,
    UPDATE_ATTENDEE,
} from "../actions/AttendeeActions";

const initialState = {
    attendees: []
};

const attendeeReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_ATTENDEES:
            return {
                attendees: action.attendees
            };
        case CREATE_ATTENDEE:
            return {
                attendees: [
                    ...state.attendees,
                    action.newAttendee
                ]
            };
        case UPDATE_ATTENDEE:
            return {
                attendees: state.attendees.map(attendee => {
                    return (attendee._id === action.attendeeId) ? action.attendee : attendee
                })
            };
        case DELETE_ATTENDEE:
            return {
                attendees: state.attendees.filter(attendee => attendee._id !== action.attendeeId)
            };
        default:
            return state
    }
};

export default attendeeReducer