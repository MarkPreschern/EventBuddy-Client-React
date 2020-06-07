export const GET_EVENTS = "GET_EVENT";
export const getEvents = (events) => ({
    type: GET_EVENTS,
    events: events
});

export const CREATE_EVENT = "CREATE_EVENT";
export const createEvent = (newEvent) => ({
    type: CREATE_EVENT,
    newEvent: newEvent
});

export const UPDATE_EVENT = "UPDATE_EVENT";
export const updateEvent = (eventId, event) => ({
    type: UPDATE_EVENT,
    eventId: eventId,
    event: event
});

export const DELETE_EVENT = "DELETE_EVENT";
export const deleteEvent = (eventId) => ({
    type: DELETE_EVENT,
    eventId: eventId
});