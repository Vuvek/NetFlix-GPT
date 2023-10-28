import axios from "axios";

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/'
})

instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
instance.defaults.headers.common['accept'] = `Application/json`


// TMDB is not allowing to use interceptors you can use in some other projects
// instance.interceptors.request.use((request) => {
//     console.log(request)
//     request.headers.channelName = "Vivek Kumar";
//     return request;
// })

// instance.interceptors.response.use((response) => {
//     console.log(response);
//     return response;
// })


export default instance;