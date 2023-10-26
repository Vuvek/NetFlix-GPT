import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    nowPlayingMovies : [],
    trailerVideo : null,
}


const MoviesSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const moviesActions = MoviesSlice.actions;
export default MoviesSlice.reducer;