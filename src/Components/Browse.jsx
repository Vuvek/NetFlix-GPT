import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useActions } from "../utils/hooks/reduxHook";
import { auth } from "../utils/firebase";
import Header from "./Header";

const Browse = () => {
  const { addUser, removeUser } = useActions();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      console.log("usererewrewrwer");
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        addUser({ uid, email, displayName, photoURL });
      } else {
        console.log("dispatched actoin and userRevoved");
        removeUser();
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <h1>Browse</h1>
    </div>
  );
};

export default Browse;
