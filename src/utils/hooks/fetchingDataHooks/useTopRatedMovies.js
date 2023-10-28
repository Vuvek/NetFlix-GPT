

import { useEffect } from "react";
import { useActions, useTypeSelector } from "../useReduxHook";
import { getTopRatedMovies } from "../../../services/browse.service";


const useTopRatedMovies = () => {
    const { addTopRatedMovies } = useActions();
    const {addTopRatedMovies : topRatedMovies} = useTypeSelector((store) => store.movies);
    useEffect(() => {
      !topRatedMovies.length && getTopRatedMovies().then((json) => {
        addTopRatedMovies(json?.data?.results);
      });
    }, []);
}

export default useTopRatedMovies;
