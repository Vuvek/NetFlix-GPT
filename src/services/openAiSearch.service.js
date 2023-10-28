import axios from '../utils/interceptors/axiosInstance'


// Search Movie in TMDB
export const fetchMovieByName = async (movieName) => {
    try {
        const res = await axios.get(`/3/search/movie?query=${movieName}&include_adult=true&page=1`)
        return res;
    } catch(err) {
        console.log(err)
        return err;
    }
}