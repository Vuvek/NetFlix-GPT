import React from "react";
import { useTypeSelector } from "../utils/hooks/useReduxHook";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const { language } = useTypeSelector((store) => store.configs);
  return (
    <div className="pt-[10%]">
      <form className="bg-lime-200 md:w-1/2 grid grid-cols-12 mx-5 md:mx-auto rounded-full">
        <input
          type="text"
          className="p-4 m-2 col-span-9 rounded-full"
          placeholder={`${lang[language]?.gptSearchPlaceholder}`}
        />
        <button
          type="submit"
          className="py-2 px-4 m-2 col-span-3 bg-red-700 text-white rounded-full text-xl"
        >
          {lang[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
