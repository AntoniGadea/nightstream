import {combineReducers} from "redux";
import authReducer from "@/redux/auth/authSlice";
import evenstReducer from "@/redux/event/eventSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
    events: evenstReducer
    // Agrega otros reducers aquí si es necesario
});
