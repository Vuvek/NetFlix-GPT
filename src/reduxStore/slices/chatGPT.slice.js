import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showGPTSearch : false,
}

const ChatGPTSlice = createSlice({
    name : "chatGPT",
    initialState,
    reducers : {
        toogleGPTSearchView : (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        }
    }
})

export const chatGPTActions = ChatGPTSlice.actions;
export default ChatGPTSlice.reducer;