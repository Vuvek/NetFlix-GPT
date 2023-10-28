

import { useEffect } from "react";
import { useActions, useTypeSelector } from "../useReduxHook";
import { getNowPlayingMovies } from "../../../services/browse.service";


const useNowPlayingMovies = () => {
    const { addNowPlayingMovies } = useActions();
    const {nowPlayingMovies} = useTypeSelector((store) => store.movies);
    useEffect(() => {
        !nowPlayingMovies.length && getNowPlayingMovies().then((json) => {
        addNowPlayingMovies(json?.data?.results);
      });
    }, []);
}

export default useNowPlayingMovies
