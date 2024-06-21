import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
  product: productReducer,
  filter: filterReducer,
});

export default rootReducer;
