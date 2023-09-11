import {combineReducers} from "redux";
import userReducer from "./reduces/UserReduce"

export const rootReducer = combineReducers({
    users: userReducer
})
