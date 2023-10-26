import axios from '../utils/interceptors/axiosInstance'


export const getNowPlayingMovies = async () => {
    const res = await axios.get('/3/movie/now_playing?page=1')
    return res;
}

export const getMovieVideos = async (movieId) => {
    const res = await axios.get(`/3/movie/${movieId}/videos?language=en-US`)
    return res;
}