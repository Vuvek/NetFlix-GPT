import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="px-12 bg-black pb-12 ">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-scroll">
          <div className="flex">
            {movies.map((movie) => {
              return (
                <>
                  <MovieCard poster={movie?.poster_path} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
