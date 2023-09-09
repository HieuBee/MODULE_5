import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./Index";

const initStore = {};
const middleware = [thunk];

const store = createStore(rootReducer, initStore, applyMiddleware(...middleware));

export default store;
