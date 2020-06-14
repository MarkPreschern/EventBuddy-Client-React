import {
    DELETE_ATTENDEE,
    UPDATE_ATTENDEE,
    SELECT_ATTENDEE
} from "../actions/AttendeeActions";

const initialState = {
    attendee: {_id: -1},
};

const attendeeReducer = (state = initialState, action) => {

    switch (action.type){
        case UPDATE_ATTENDEE:
            return {
                attendee: action.attendee,
            };
        case DELETE_ATTENDEE:
            return {
                attendee: {_id: -1}
            };
        case SELECT_ATTENDEE:
            return {
                attendee: action.attendee,
            };
        default:
            return state
    }
};

export default attendeeReducer