import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useTypeSelector } from "../utils/hooks/reduxHook";

const Header = () => {
  const navigate = useNavigate();
  const { data: user } = useTypeSelector((store) => store.userReducer);
  console.log(user, "sakdflksaj");

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
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="NetFlix Logo"
      />
      {user && (
        <div className="flex justify-center items-center gap-5">
          <img className="w-10 h-10" alt="UserImage" src={user.photoURL} />
          <button onClick={handleSignOut}>(Sign Out)</button>
        </div>
      )}
    </div>
  );
};

export default Header;
