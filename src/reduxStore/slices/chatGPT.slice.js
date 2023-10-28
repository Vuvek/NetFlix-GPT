import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showGPTSearch : false,
    chatGptMovies : [],
    searchedMovieNames : null,
}

const ChatGPTSlice = createSlice({
    name : "chatGPT",
    initialState,
    reducers : {
        toogleGPTSearchView : (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGptMovieResult : (state,action) => {
            const { moviesResults,movieNames } = action.payload;
            state.chatGptMovies = moviesResults;
            state.searchedMovieNames = movieNames;
        }
    }
})

export const chatGPTActions = ChatGPTSlice.actions;
export default ChatGPTSlice.reducer;