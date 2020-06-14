export const UPDATE_ORGANIZER = "UPDATE_ORGANIZER";
export const updateOrganizer = (organizer) => ({
    type: UPDATE_ORGANIZER,
    organizer: organizer
});

export const DELETE_ORGANIZER = "DELETE_ORGANIZER";
export const deleteOrganizer = () => ({
    type: DELETE_ORGANIZER,
});

export const SELECT_ORGANIZER = "SELECT_ORGANIZER";
export const selectOrganizer = (organizer) => ({
    type: SELECT_ORGANIZER,
    organizer: organizer
});