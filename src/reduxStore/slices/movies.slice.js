import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    nowPlayingMovies : [],
    trailerVideo : null,
    addPopuluarMovies : [],
    addTopRatedMovies : [],
    addUpcomingMovies : [],
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
        },
        addPopularMovies : (state,action) => {
            state.addPopuluarMovies = action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.addTopRatedMovies = action.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.addUpcomingMovies = action.payload;
        }
    }
})

export const moviesActions = MoviesSlice.actions;
export default MoviesSlice.reducer;