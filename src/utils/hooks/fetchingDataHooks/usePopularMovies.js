

import { useEffect } from "react";
import { useActions, useTypeSelector } from "../useReduxHook";
import {  getPopularMovies } from "../../../services/browse.service";


const usePopularMovies = () => {
    const { addPopularMovies } = useActions();
    const {addPopuluarMovies : popularMovies} = useTypeSelector((store) => store.movies);
    useEffect(() => {
        !popularMovies.length && getPopularMovies().then((json) => {
        addPopularMovies(json?.data?.results);
      });
    }, []);
}

export default usePopularMovies
