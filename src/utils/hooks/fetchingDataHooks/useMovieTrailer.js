import { useEffect } from 'react'
import { useActions, useTypeSelector } from '../useReduxHook';
import { getMovieVideos } from '../../../services/browse.service';


const useMovieTrailer = (movieId) => {
  const { addTrailerVideo } = useActions();
  const {trailerVideo} = useTypeSelector((store) => store.movies);

    const fetchMovieVideo = async () => {     
      const res = await getMovieVideos(movieId);
      const filteredData = res?.data?.results.filter(
        (video) => video === "Trailer"
      );
      addTrailerVideo(filteredData.length ? filteredData[0] : res.data?.results[0]);
    };
  
    useEffect(() => {
      if (!trailerVideo) {
        fetchMovieVideo();
      }
    }, []);

}

export default useMovieTrailer
