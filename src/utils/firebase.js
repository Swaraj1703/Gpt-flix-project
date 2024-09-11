// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNMEVUOGx3JCxoIckhwCs3ad3JgU9pPfQ",
  authDomain: "gpt-flix-1aec3.firebaseapp.com",
  projectId: "gpt-flix-1aec3",
  storageBucket: "gpt-flix-1aec3.appspot.com",
  messagingSenderId: "92892973746",
  appId: "1:92892973746:web:74857f85e90d31c2db57ab",
  measurementId: "G-E1ZDFLKN28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();