import {combineReducers} from "redux";
import studentReducer from "./reduces/UserReduce"

export const rootReducer = combineReducers({
    students: studentReducer
})
