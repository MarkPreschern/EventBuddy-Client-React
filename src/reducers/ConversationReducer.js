import {
    GET_CONVERSATIONS,
    CREATE_CONVERSATION,
    DELETE_CONVERSATION,
    UPDATE_CONVERSATION,
} from "../actions/ConversationActions";

const initialState = {
    conversations: []
};

const conversationReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_CONVERSATIONS:
            return {
                conversations: action.conversations
            };
        case CREATE_CONVERSATION:
            return {
                conversations: [
                    ...state.conversations,
                    action.newConversation
                ]
            };
        case UPDATE_CONVERSATION:
            return {
                conversations: state.conversations.map(conversation => {
                    return (conversation._id === action.conversationId) ? action.conversation : conversation
                })
            };
        case DELETE_CONVERSATION:
            return {
                conversations: state.conversations.filter(conversation => conversation._id !== action.conversationId)
            };
        default:
            return state
    }
};

export default conversationReducer