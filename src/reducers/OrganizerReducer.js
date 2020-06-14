import {
    DELETE_ORGANIZER,
    UPDATE_ORGANIZER,
    SELECT_ORGANIZER
} from "../actions/OrganizerActions";

const initialState = {
    organizer: {_id: -1},
};

const organizerReducer = (state = initialState, action) => {

    switch (action.type){
        case UPDATE_ORGANIZER:
            return {
                organizer: action.organizer
            };
        case DELETE_ORGANIZER:
            return {
                organizer: {_id: -1}
            };
        case SELECT_ORGANIZER:
            return {
                organizer: action.organizer,
            };
        default:
            return state
    }
};

export default organizerReducer