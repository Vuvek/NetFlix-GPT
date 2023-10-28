import React from "react";
import MovieList from "./MovieList";
import { useTypeSelector } from "../utils/hooks/useReduxHook";

const SecondaryContainer = () => {
  const movies = useTypeSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <MovieList
        title={"Top Rated Movies"}
        movies={movies?.addTopRatedMovies}
      />
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies?.addUpcomingMovies} />
      <MovieList title={"Trending"} movies={movies?.addTopRatedMovies} />
      <MovieList title={"Popular"} movies={movies?.addPopuluarMovies} />
      <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies} />

      {/* 

          // MovieList - Popular 
                  MovieCard * n 
          // MovieList - Now Playing 
          // MovieList - Trending Movie
          // MovieList - Top Rated 
          // MovieList - Upcoming 
          // MovieList - Video BackGround

      */}
    </div>
  );
};

export default SecondaryContainer;
