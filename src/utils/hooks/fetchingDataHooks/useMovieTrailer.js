import { useEffect } from 'react'
import { useActions } from '../useReduxHook';
import { getMovieVideos } from '../../../services/browse.service';


const useMovieTrailer = (movieId) => {
    const { addTrailerVideo } = useActions();

    const fetchMovieVideo = async () => {
      const res = await getMovieVideos(movieId);
      const filteredData = res?.data?.results.filter(
        (video) => video === "Trailer"
      );
      console.log(res,'lksajfdlksajdflksajdlfkjsadlkfjsalkd')
      addTrailerVideo(filteredData.length ? filteredData[0] : res.data?.results[0]);
    };
  
    useEffect(() => {
      fetchMovieVideo();
    }, []);

}

export default useMovieTrailer
