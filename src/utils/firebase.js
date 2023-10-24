// Import the functions you need from the SDKs you need
// https://netflixgpt-7b9c8.web.app/
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0CaTzT_xzFOeLCRw8p7o8p_lC_KbD76w",
  authDomain: "netflixgpt-7b9c8.firebaseapp.com",
  projectId: "netflixgpt-7b9c8",
  storageBucket: "netflixgpt-7b9c8.appspot.com",
  messagingSenderId: "499842953413",
  appId: "1:499842953413:web:0519f854e4ba9519b700ac",
  measurementId: "G-3W0JVE62BP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
