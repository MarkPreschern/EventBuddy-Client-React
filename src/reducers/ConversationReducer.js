import {
    GET_CONVERSATIONS,
    CREATE_CONVERSATION,
    DELETE_CONVERSATION,
    UPDATE_CONVERSATION,
    SELECT_CONVERSATION
} from "../actions/ConversationActions";

const initialState = {
    conversation: {_id: -1},
    conversations: []
};

const conversationReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_CONVERSATIONS:
            return {
                conversation: state.conversation,
                conversations: action.conversations
            };
        case CREATE_CONVERSATION:
            return {
                conversation: state.conversation,
                conversations: [
                    ...state.conversations,
                    action.newConversation
                ]
            };
        case UPDATE_CONVERSATION:
            return {
                conversation: state.conversation,
                conversations: state.conversations.map(conversation => {
                    return (conversation._id === action.conversationId) ? action.conversation : conversation
                })
            };
        case DELETE_CONVERSATION:
            return {
                conversation: state.conversation,
                conversations: state.conversations.filter(conversation => conversation._id !== action.conversationId)
            };
        case SELECT_CONVERSATION:
            return {
                conversation: action.conversation,
                conversations: state.conversations
            };
        default:
            return state
    }
};

export default conversationReducer