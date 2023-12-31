import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "../utils/contants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed w-100 h-100 -z-10">
        <img
          src={BACKGROUND_IMAGE}
          alt="BackGround"
          className="w-12/12 min-h-screen object-cover object-center"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
