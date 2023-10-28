

import { useEffect } from "react";
import { useActions } from "../useReduxHook";
import {  getPopularMovies } from "../../../services/browse.service";


const usePopularMovies = () => {
    const { addPopularMovies } = useActions();
    useEffect(() => {
      getPopularMovies().then((json) => {
        addPopularMovies(json?.data?.results);
      });
    }, []);
}

export default usePopularMovies
