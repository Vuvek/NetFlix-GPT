import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import moviesReducer from "./slices/movies.slice";


const rootReducer = combineReducers({
    userReducer,
    movies : moviesReducer,
})

export default rootReducer;