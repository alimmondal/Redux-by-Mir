import { combineReducers } from "redux";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
  blog: blogReducer,
  // filter: filterReducer,
});

export default rootReducer;
