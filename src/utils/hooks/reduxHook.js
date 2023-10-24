import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import actions from '../../reduxStore/actions.redux'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions,dispatch)
}

export const useTypeSelector = useSelector;




// import React, { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import { useActions } from "../utils/hooks/reduxHook";

// const Body = ({ children }) => {
//   const { addUser, removeUser } = useActions();
//   useEffect(() => {
//     console.log("usererewrewrwer");
//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, email, displayName } = user;
//         addUser({ uid, email, displayName });
//       } else {
//         removeUser();
//       }
//     });
//   }, []);
//   return <div>{children}</div>;
// };

// export default Body;
