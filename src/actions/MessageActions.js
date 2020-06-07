export const GET_MESSAGES = "GET_MESSAGE";
export const getMessages = (messages) => ({
    type: GET_MESSAGES,
    messages: messages
});

export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const createMessage = (newMessage) => ({
    type: CREATE_MESSAGE,
    newMessage: newMessage
});

export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const updateMessage = (messageId, message) => ({
    type: UPDATE_MESSAGE,
    messageId: messageId,
    message: message
});

export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const deleteMessage = (messageId) => ({
    type: DELETE_MESSAGE,
    messageId: messageId
});