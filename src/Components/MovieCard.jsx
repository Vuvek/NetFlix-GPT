import React from "react";
import { IMG_CDN_URL } from "../utils/contants";

const MovieCard = ({ poster }) => {
  if (!poster) return null;
  return (
    <div className="w-48 pr-2">
      <img
        className="w-full h-full"
        src={`${IMG_CDN_URL + poster}`}
        alt="ImagePoster"
      />
    </div>
  );
};

export default MovieCard;
