import { createStore, combineReducers } from "redux";
import tour from "./reducer/tour";

export default createStore(combineReducers({ tour }))
