import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignupSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="BackGround"
          className=""
        />
      </div>
      <form className="w-3/12 absolute p-12 m-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 block w-[100%] bg-gray-600 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 block w-[100%] bg-gray-600 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 block w-[100%] bg-gray-600 rounded-lg"
        />
        <button
          onClick={() => {}}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <p className="p-2 cursor-pointer" onClick={handleSignupSignIn}>
            New To Netflix ? Sign Up Now
          </p>
        ) : (
          <p className="p-2 cursor-pointer" onClick={handleSignupSignIn}>
            Already Registered ? Sign In Now
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
