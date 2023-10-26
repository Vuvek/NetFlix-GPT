import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useActions } from "../utils/hooks/useReduxHook";
import { auth } from "../utils/firebase";
import { useLocation } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const { addUser, removeUser } = useActions();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("usererewrewrwer");
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        addUser({ uid, email, displayName, photoURL });
        setLoading(false);
        if (
          location.pathname.startsWith("/signin") ||
          location.pathname.startsWith("/signup")
        ) {
          navigate("/");
        } else {
          navigate(location.pathname);
        }
      } else {
        console.log("dispatched actoin and userRevoved");
        removeUser();
        setLoading(false);
        if (
          location.pathname.startsWith("/signin") ||
          location.pathname.startsWith("/signup")
        ) {
          navigate(location.pathname);
        } else {
          navigate("/signin");
        }
      }
    });

    // Unsubscribe the event
    return () => {
      unsubscribe();
    };
  }, [auth.currentUser]);

  if (loading) {
    return <div className="spinner absolute top-[50%] left-[50%]"></div>;
  }
  return <>{children}</>;
};

export default AuthProvider;
