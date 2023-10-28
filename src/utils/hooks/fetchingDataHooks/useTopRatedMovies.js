

import { useEffect } from "react";
import { useActions } from "../useReduxHook";
import { getTopRatedMovies } from "../../../services/browse.service";


const useTopRatedMovies = () => {
    const { addTopRatedMovies } = useActions();
    useEffect(() => {
      getTopRatedMovies().then((json) => {
        addTopRatedMovies(json?.data?.results);
      });
    }, []);
}

export default useTopRatedMovies;
