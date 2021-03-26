import { combineReducers } from "redux";
import auth from "./auth";

// reducers, combine all the reducers in one
export default combineReducers({
  auth,
});
