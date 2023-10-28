import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: "en",
}

const ConfigSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
})

export const configActions = ConfigSlice.actions;
export default ConfigSlice.reducer;