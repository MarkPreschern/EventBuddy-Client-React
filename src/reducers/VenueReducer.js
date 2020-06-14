import {
    GET_VENUES,
    CREATE_VENUE,
    DELETE_VENUE,
    UPDATE_VENUE,
    SELECT_VENUE
} from "../actions/VenueActions";
import {SELECT_EVENT} from "../actions/EventActions";

const initialState = {
    venue: {_id: -1},
    venues: []
};

const venueReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_VENUES:
            return {
                venue: state.venue,
                venues: action.venues
            };
        case CREATE_VENUE:
            return {
                venue: state.venue,
                venues: [
                    ...state.venues,
                    action.newVenue
                ]
            };
        case UPDATE_VENUE:
            return {
                venue: state.venue,
                venues: state.venues.map(venue => {
                    return (venue._id === action.venueId) ? action.venue : venue
                })
            };
        case DELETE_VENUE:
            return {
                venue: state.venue,
                venues: state.venues.filter(venue => venue._id !== action.venueId)
            };
        case SELECT_VENUE:
            return {
                venue: action.venue,
                venues: state.venues
            };
        default:
            return state
    }
};

export default venueReducer