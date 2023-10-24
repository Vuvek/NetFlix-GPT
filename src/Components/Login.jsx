import React, { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useActions } from "../utils/hooks/reduxHook";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const formReducer = (state, action) => {
  switch (action.type) {
    case "name": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "email": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: action.payload,
      };
    }
    case "signin": {
      return {
        email: state.email,
        password: state.password,
      };
    }
    case "signup": {
      return {
        ...state,
      };
    }
    default: {
      throw new Error("Unknown Action :" + action.type);
    }
  }
};

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(false);
  const [state, dispatch] = useReducer(formReducer, initialValues);
  const location = useLocation();

  const { addUser, removeUser } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location, "location");
    if (location.pathname === "/signup") {
      setIsSignIn(false);
    } else if (location.pathname === "/signin") {
      setIsSignIn(true);
    }
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = state;
    if (!checkValidData(email, password)) {
      setError(false);
      if (isSignIn) {
        // Sign In Logic
        dispatch({ type: "signin" });
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode + "- " + errorMessage);
          });
      } else {
        // Sign Up Logic
        dispatch({ type: "signup" });
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            updateProfile(user, {
              displayName: state.name,
              photoURL: "https://avatars.githubusercontent.com/u/82228522?v=4",
            })
              .then(() => {
                navigate("/signin");
              })
              .catch((error) => {
                console.log(error);
                setError(error);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode + "- " + errorMessage);
          });
      }
    } else {
      setError("Please Enter Valid Values!");
    }
  };
  const handleChange = (event, name) => {
    dispatch({ type: name, payload: event.target.value });
    if (!checkValidData(state.email, state.password)) {
      setError(false);
    } else {
      setError("Please Enter Valid Values!");
    }
  };

  const handleValidate = (event) => {
    if (!checkValidData(state.email, state.password)) {
      setError(false);
    } else {
      setError("Please Enter Valid Values!");
    }
  };

  return (
    <div>
      <div className="absolute w-100 h-100">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="BackGround"
          className="w-12/12 min-h-screen object-cover object-center"
        />
      </div>
      <form className="w-10/12 sm:w-8/12 lg:w-4/12 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-12 mx-auto text-white bg-black bg-opacity-80 rounded-lg lg:mt-16">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            value={state.name}
            onChange={(event) => handleChange(event, "name")}
            onBlur={handleValidate}
            placeholder="Full Name"
            className="p-4 my-4 block w-[100%] bg-gray-600 rounded-lg"
          />
        )}
        <input
          type="text"
          value={state.email}
          onChange={(event) => handleChange(event, "email")}
          onBlur={handleValidate}
          placeholder="Email Address"
          className="p-4 my-4 block w-[100%] bg-gray-600 rounded-lg"
        />
        <input
          type="password"
          onChange={(event) => handleChange(event, "password")}
          onBlur={handleValidate}
          placeholder="Password"
          className="p-4 my-4 block w-[100%] bg-gray-600 rounded-lg"
        />
        <button
          onClick={handleSubmit}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {error && (
          <p className="text-center text-red-700 font-bold text-lg">{error}</p>
        )}
        {isSignIn ? (
          <Link to={"/signup"} className="p-2 cursor-pointer">
            New To Netflix ? Sign Up Now
          </Link>
        ) : (
          <Link to={"/signin"} className="p-2 cursor-pointer">
            Already Registered ? Sign In Now
          </Link>
        )}
      </form>
    </div>
  );
};

export default Login;
