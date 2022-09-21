import todoReducers from "./todoReducers";
import { combineReducers } from "redux";

const rooReducer = combineReducers({
  todoReducers,
});

export default rooReducer;
