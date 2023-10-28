import React from "react";
import { IMG_CDN_URL } from "../utils/contants";

const MovieCard = ({ poster }) => {
  console.log(poster, "postlskajfdlksadjflks");
  return (
    <div className="w-48 pr-2">
      <img src={`${IMG_CDN_URL + poster}`} alt="ImagePoster" />
    </div>
  );
};

export default MovieCard;
