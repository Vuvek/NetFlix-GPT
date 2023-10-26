import { useEffect } from "react";
import { getNowPlayingMovies } from "../services/browse.service";
import { useActions } from "../utils/hooks/useReduxHook";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const { addNowPlayingMovies } = useActions();
  useEffect(() => {
    getNowPlayingMovies().then((json) => {
      addNowPlayingMovies(json?.data?.results);
    });
  }, []);

  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
