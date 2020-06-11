import {combineReducers} from "redux";
import AttendeeReducer from "./AttendeeReducer";
import ConversationReducer from "./ConversationReducer";
import EventReducer from "./EventReducer"
import MessageReducer from "./MessageReducer"
import OrganizerReducer from "./OrganizerReducer"
import VenueReducer from "./VenueReducer"
import {RESET_ACTION} from "../actions/RootActions";

const appReducer = combineReducers(
    {
        AttendeeReducer,
        ConversationReducer,
        EventReducer,
        MessageReducer,
        OrganizerReducer,
        VenueReducer
    });

const rootReducer = (state, action) => {
    if (action.type === RESET_ACTION) {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;