export const GET_VENUES = "GET_VENUE";
export const getVenues = (venues) => ({
    type: GET_VENUES,
    venues: venues
});

export const CREATE_VENUE = "CREATE_VENUE";
export const createVenue = (newVenue) => ({
    type: CREATE_VENUE,
    newVenue: newVenue
});

export const UPDATE_VENUE = "UPDATE_VENUE";
export const updateVenue = (venueId, venue) => ({
    type: UPDATE_VENUE,
    venueId: venueId,
    venue: venue
});

export const DELETE_VENUE = "DELETE_VENUE";
export const deleteVenue = (venueId) => ({
    type: DELETE_VENUE,
    venueId: venueId
});

export const SELECT_VENUE = "SELECT_VENUE";
export const selectVenue = (venue) => ({
    type: SELECT_VENUE,
    venue: venue
});