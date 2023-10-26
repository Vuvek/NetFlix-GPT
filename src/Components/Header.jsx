import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useTypeSelector } from "../utils/hooks/useReduxHook";
import { NEXTFLIX_LOGO, PHOTO_URL } from "../utils/contants";

const Header = () => {
  const navigate = useNavigate();
  const { data: user } = useTypeSelector((store) => store.userReducer);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NEXTFLIX_LOGO} alt="NetFlix Logo" />

      {user && (
        <div className="flex justify-center items-center gap-5">
          <img className="w-10 h-10" alt="UserImage" src={PHOTO_URL} />
          <button className="text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
