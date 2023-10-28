import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { headerConstants } from "../utils/pageConstant";
import { NEXTFLIX_LOGO, PHOTO_URL } from "../utils/contants";
import { useActions, useTypeSelector } from "../utils/hooks/useReduxHook";

const Header = () => {
  const navigate = useNavigate();
  const { toogleGPTSearchView, changeLanguage } = useActions();
  const { data: user } = useTypeSelector((store) => store.userReducer);
  const { showGPTSearch: showGPT } = useTypeSelector((store) => store.gpt);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  const handleChatGPT = () => {
    toogleGPTSearchView();
  };

  const handleLanguage = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div className="absolute w-full px-2 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 m-auto md:m-0"
        src={NEXTFLIX_LOGO}
        alt="NetFlix Logo"
      />

      {user && (
        <div className="flex justify-around md:justify-center items-center gap-5">
          {showGPT && (
            <select
              className="bg-slate-800 p-2 m-2 text-white rounded focus-visible:outline-none"
              onChange={handleLanguage}
            >
              {headerConstants.supportedLanguages.map((language) => {
                return (
                  <option
                    key={language?.identifier}
                    value={language?.identifier}
                  >
                    {language?.name}
                  </option>
                );
              })}
            </select>
          )}

          <button
            onClick={handleChatGPT}
            className="py-2 px-4 mx-1 md:mx-4 bg-red-600 text-white rounded-lg"
          >
            {showGPT ? "Home" : "GPT Search"}
          </button>

          <img
            className="hidden md:block w-10 h-10"
            alt="UserImage"
            src={PHOTO_URL}
          />

          <button className="text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
