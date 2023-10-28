import axios from '../utils/interceptors/axiosInstance'


export const getNowPlayingMovies = async () => {
    const res = await axios.get('/3/movie/now_playing?page=5')
    return res;
}

export const getMovieVideos = async (movieId) => {
    const res = await axios.get(`/3/movie/${movieId}/videos`)
    return res;
}


export const getPopularMovies = async () => {
    const res = await axios.get('/3/movie/popular?page=1')
    return res;
}
export const getTopRatedMovies = async () => {
    const res = await axios.get('/3/movie/top_rated?page=1')
    return res;
}
export const getUpcomingMovies = async () => {
    const res = await axios.get('/3/movie/upcoming?page=1')
    return res;
}