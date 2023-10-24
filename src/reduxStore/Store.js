import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers.redux";


const appStore = configureStore({
    reducer : rootReducer,
})

export default appStore;