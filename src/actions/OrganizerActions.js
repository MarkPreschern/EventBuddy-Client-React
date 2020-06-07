export const GET_ORGANIZERS = "GET_ORGANIZER";
export const getOrganizers = (organizers) => ({
    type: GET_ORGANIZERS,
    organizers: organizers
});

export const CREATE_ORGANIZER = "CREATE_ORGANIZER";
export const createOrganizer = (newOrganizer) => ({
    type: CREATE_ORGANIZER,
    newOrganizer: newOrganizer
});

export const UPDATE_ORGANIZER = "UPDATE_ORGANIZER";
export const updateOrganizer = (organizerId, organizer) => ({
    type: UPDATE_ORGANIZER,
    organizerId: organizerId,
    organizer: organizer
});

export const DELETE_ORGANIZER = "DELETE_ORGANIZER";
export const deleteOrganizer = (organizerId) => ({
    type: DELETE_ORGANIZER,
    organizerId: organizerId
});