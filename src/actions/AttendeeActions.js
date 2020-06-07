export const GET_ATTENDEES = "GET_ATTENDEE";
export const getAttendees = (attendees) => ({
    type: GET_ATTENDEES,
    attendees: attendees
});

export const CREATE_ATTENDEE = "CREATE_ATTENDEE";
export const createAttendee = (newAttendee) => ({
    type: CREATE_ATTENDEE,
    newAttendee: newAttendee
});

export const UPDATE_ATTENDEE = "UPDATE_ATTENDEE";
export const updateAttendee = (attendeeId, attendee) => ({
    type: UPDATE_ATTENDEE,
    attendeeId: attendeeId,
    attendee: attendee
});

export const DELETE_ATTENDEE = "DELETE_ATTENDEE";
export const deleteAttendee = (attendeeId) => ({
    type: DELETE_ATTENDEE,
    attendeeId: attendeeId
});