import { combineReducers } from "@reduxjs/toolkit";
import postReducers from "./postReducers";
import authReducers from "./authReducers";
import userReducer from "./userReducer";
import movieReducer from "./movieReducer";

// We will have some reducers here
export default combineReducers({
  post: postReducers,
  auth: authReducers,
  user: userReducer,
  movie: movieReducer,
});