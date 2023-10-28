

import { useEffect } from "react";
import { useActions } from "../useReduxHook";
import { getNowPlayingMovies } from "../../../services/browse.service";


const useNowPlayingMovies = () => {
    const { addNowPlayingMovies } = useActions();
    useEffect(() => {
      getNowPlayingMovies().then((json) => {
        addNowPlayingMovies(json?.data?.results);
      });
    }, []);
}

export default useNowPlayingMovies
