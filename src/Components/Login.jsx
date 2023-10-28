import React, { useEffect, useReducer, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BACKGROUND_IMAGE, PHOTO_URL } from "../utils/contants";
import { formReducer } from "../utils/functions";
import { useActions } from "../utils/hooks/useReduxHook";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const { addUser } = useActions();
  const [state, dispatch] = useReducer(formReducer, initialValues);

  useEffect(() => {
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
            updateProfile(user, {
              displayName: state.name,
              photoURL: PHOTO_URL,
            })
              .then(() => {
                addUser(auth.currentUser);
                navigate("/signin");
              })
              .catch((error) => {
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
    } else if (!event.target.value) {
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
      <div className="absolute bg-fixed w-100 h-100">
        <img
          src={BACKGROUND_IMAGE}
          alt="BackGround"
          className="w-12/12 min-h-screen object-cover object-center"
        />
      </div>

      <form className="w-full md:w-auto absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-12 mx-auto text-white bg-black bg-opacity-80 rounded-lg lg:mt-16">
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
