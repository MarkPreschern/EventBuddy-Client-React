import {
    GET_MESSAGES,
    CREATE_MESSAGE,
    DELETE_MESSAGE,
    UPDATE_MESSAGE,
} from "../actions/MessageActions";

const initialState = {
    messages: []
};

const messageReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_MESSAGES:
            return {
                messages: action.messages
            };
        case CREATE_MESSAGE:
            return {
                messages: [
                    ...state.messages,
                    action.newMessage
                ]
            };
        case UPDATE_MESSAGE:
            return {
                messages: state.messages.map(message => {
                    return (message._id === action.messageId) ? action.message : message
                })
            };
        case DELETE_MESSAGE:
            return {
                messages: state.messages.filter(message => message._id !== action.messageId)
            };
        default:
            return state
    }
};

export default messageReducer