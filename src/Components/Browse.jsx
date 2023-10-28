import useNowPlayingMovies from "../utils/hooks/fetchingDataHooks/useNowPlayingMovies";
import usePopularMovies from "../utils/hooks/fetchingDataHooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/fetchingDataHooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/hooks/fetchingDataHooks/useUpcomingMovies";
import { useTypeSelector } from "../utils/hooks/useReduxHook";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const { showGPTSearch: showGPT } = useTypeSelector((store) => store.gpt);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      {showGPT ? (
        <>
          <GptSearch />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
