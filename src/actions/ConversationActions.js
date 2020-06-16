export const GET_CONVERSATIONS = "GET_CONVERSATION";
export const getConversations = (conversations) => ({
    type: GET_CONVERSATIONS,
    conversations: conversations
});

export const CREATE_CONVERSATION = "CREATE_CONVERSATION";
export const createConversation = (newConversation) => ({
    type: CREATE_CONVERSATION,
    newConversation: newConversation
});

export const UPDATE_CONVERSATION = "UPDATE_CONVERSATION";
export const updateConversation = (conversationId, conversation) => ({
    type: UPDATE_CONVERSATION,
    conversationId: conversationId,
    conversation: conversation
});

export const DELETE_CONVERSATION = "DELETE_CONVERSATION";
export const deleteConversation = (conversationId) => ({
    type: DELETE_CONVERSATION,
    conversationId: conversationId
});

export const SELECT_CONVERSATION = "SELECT_CONVERSATION";
export const selectConversation = (conversation) => ({
    type: SELECT_CONVERSATION,
    conversation: conversation
});