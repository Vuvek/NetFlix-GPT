

import { useEffect } from "react";
import { useActions } from "../useReduxHook";
import { getUpcomingMovies } from "../../../services/browse.service";


const useUpcomingMovies = () => {
    const { addUpcomingMovies } = useActions();
    useEffect(() => {
      getUpcomingMovies().then((json) => {
        addUpcomingMovies(json?.data?.results);
      });
    }, []);
}

export default useUpcomingMovies;
