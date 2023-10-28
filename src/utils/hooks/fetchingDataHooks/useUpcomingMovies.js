

import { useEffect } from "react";
import { useActions, useTypeSelector } from "../useReduxHook";
import { getUpcomingMovies } from "../../../services/browse.service";


const useUpcomingMovies = () => {
    const { addUpcomingMovies } = useActions();
    const {addUpcomingMovies : upcomingMovies} = useTypeSelector((store) => store.movies);
    useEffect(() => {
      !upcomingMovies.length && getUpcomingMovies().then((json) => {
        addUpcomingMovies(json?.data?.results);
      });
    }, []);
}

export default useUpcomingMovies;
