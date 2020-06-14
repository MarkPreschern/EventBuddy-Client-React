export const UPDATE_ATTENDEE = "UPDATE_ATTENDEE";
export const updateAttendee = (attendee) => ({
    type: UPDATE_ATTENDEE,
    attendee: attendee
});

export const DELETE_ATTENDEE = "DELETE_ATTENDEE";
export const deleteAttendee = () => ({
    type: DELETE_ATTENDEE,
});

export const SELECT_ATTENDEE = "SELECT_ATTENDEE";
export const selectAttendee = (attendee) => ({
    type: SELECT_ATTENDEE,
    attendee: attendee
});