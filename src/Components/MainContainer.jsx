import React, { useEffect, useState } from "react";
import { useTypeSelector } from "../utils/hooks/useReduxHook";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const { nowPlayingMovies: movies } = useTypeSelector((store) => store.movies);
  const [mainMovie, setMainMovie] = useState(null);
  useEffect(() => {
    setMainMovie(movies[6]);
  }, [movies]);

  if (!mainMovie) return;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[28  %] bg-black md:pt-0 md:bg-none      ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
