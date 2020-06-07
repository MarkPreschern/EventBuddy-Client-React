import {
    GET_VENUES,
    CREATE_VENUE,
    DELETE_VENUE,
    UPDATE_VENUE,
} from "../actions/VenueActions";

const initialState = {
    venues: []
};

const venueReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_VENUES:
            return {
                venues: action.venues
            };
        case CREATE_VENUE:
            return {
                venues: [
                    ...state.venues,
                    action.newVenue
                ]
            };
        case UPDATE_VENUE:
            return {
                venues: state.venues.map(venue => {
                    return (venue._id === action.venueId) ? action.venue : venue
                })
            };
        case DELETE_VENUE:
            return {
                venues: state.venues.filter(venue => venue._id !== action.venueId)
            };
        default:
            return state
    }
};

export default venueReducer