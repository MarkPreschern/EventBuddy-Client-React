import {
    GET_ORGANIZERS,
    CREATE_ORGANIZER,
    DELETE_ORGANIZER,
    UPDATE_ORGANIZER,
} from "../actions/OrganizerActions";

const initialState = {
    organizers: []
};

const organizerReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_ORGANIZERS:
            return {
                organizers: action.organizers
            };
        case CREATE_ORGANIZER:
            return {
                organizers: [
                    ...state.organizers,
                    action.newOrganizer
                ]
            };
        case UPDATE_ORGANIZER:
            return {
                organizers: state.organizers.map(organizer => {
                    return (organizer._id === action.organizerId) ? action.organizer : organizer
                })
            };
        case DELETE_ORGANIZER:
            return {
                organizers: state.organizers.filter(organizer => organizer._id !== action.organizerId)
            };
        default:
            return state
    }
};

export default organizerReducer