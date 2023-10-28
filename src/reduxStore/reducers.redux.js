import userReducer from "./slices/user.slice";
import moviesReducer from "./slices/movies.slice";
import { combineReducers } from "@reduxjs/toolkit";
import configReducer from "./slices/config.slice";
import chatGPTReducer from "./slices/chatGPT.slice";

const rootReducer = combineReducers({
  userReducer,
  gpt: chatGPTReducer,
  movies: moviesReducer,
  configs : configReducer,
});

export default rootReducer;
