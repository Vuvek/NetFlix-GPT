import React, { useRef } from "react";
import { useActions, useTypeSelector } from "../utils/hooks/useReduxHook";
import lang from "../utils/languageConstant";
import openai from "../utils/openai";
import { fetchMovieByName } from "../services/openAiSearch.service";

const GptSearchBar = () => {
  const searchRef = useRef();
  const { addGptMovieResult } = useActions();
  const { language } = useTypeSelector((store) => store.configs);

  const handleGptSearchSubmit = async (e) => {
    e.preventDefault();
    let gptSearchResult;
    try {
      const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query : ${searchRef.current.value}. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.`;
      const result = await openai.chat.completions.create({
        messages: [{ role: "user", message: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      gptSearchResult = result.choices?.[0]?.message?.content.split(",");
    } catch (error) {
      gptSearchResult = ["Gadar", "Sholay", "Don", "Golmaal", "Koi Mil Gaya"];
    }

    // For each I will search TMDB API calls.
    const moviesPromises = gptSearchResult.map((movieName) =>
      fetchMovieByName(movieName)
    );
    const moviesResults = await Promise.all(moviesPromises);
    console.log(moviesResults, "moviesResults");
    addGptMovieResult({ moviesResults, movieNames: gptSearchResult });
  };
  return (
    <div className="pt-[35%] sm:pt-[20%] md:pt-[10%]">
      <form className="bg-black bg-opacity-[0.9] md:w-3/4 grid grid-cols-12 mx-5 md:mx-auto rounded-full">
        <input
          type="text"
          ref={searchRef}
          name="search"
          className="p-4 m-2 col-span-9 rounded-full"
          placeholder={`${lang[language]?.gptSearchPlaceholder}`}
        />
        <button
          type="submit"
          onClick={handleGptSearchSubmit}
          className="py-2 px-4 m-2 col-span-3 bg-red-700 text-white rounded-full text-sm  md:text-xl"
        >
          {lang[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
