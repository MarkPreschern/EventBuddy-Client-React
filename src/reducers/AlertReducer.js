import {
    SHOW_ALERT,
    CLOSE_ALERT
} from "../actions/AlertActions";

const initialState = {
    active: false,
    message: ""
};

const alertReducer = (state = initialState, action) => {

    switch (action.type){
        case SHOW_ALERT:
            return {
                active: true,
                message: action.message
            };
        case CLOSE_ALERT:
            return {
                active: false,
                message: ""
            };
        default:
            return state
    }
};

export default alertReducer