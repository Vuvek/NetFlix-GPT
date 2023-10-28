import React from "react";
import { useTypeSelector } from "../utils/hooks/useReduxHook";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { searchedMovieNames: movieNames, chatGptMovies: movies } =
    useTypeSelector((state) => state.gpt);

  if (!movieNames) return null;

  return (
    <div className="m-10 sm:m-8 md:m-16  bg-black bg-opacity-[0.8] rounded-lg">
      {movieNames.map((movieName, index) => {
        return (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movies[index]?.data?.results}
          />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestions;
