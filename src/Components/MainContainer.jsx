import React, { useEffect, useState } from "react";
import { useTypeSelector } from "../utils/hooks/useReduxHook";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const { nowPlayingMovies: movies } = useTypeSelector((store) => store.movies);
  const [mainMovie, setMainMovie] = useState(null);
  useEffect(() => {
    setMainMovie(movies[1]);
  }, [movies]);

  if (!mainMovie) return;

  const { original_title, overview, id } = mainMovie;
  console.log(movies, "movies");

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
