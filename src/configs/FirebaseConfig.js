// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth'; 


const FirebaseConfig = {
  apiKey: "AIzaSyBmCYr6f3V9STTDMxHgK9otm8UCvyFHVlI",
  authDomain: "dash-clash-8543a.firebaseapp.com",
  projectId: "dash-clash-8543a",
  storageBucket: "dash-clash-8543a.appspot.com",
  messagingSenderId: "1052923784603",
  appId: "1:1052923784603:web:b6e124eb00f57e5d57853e",
  measurementId: "G-7VXQMRP4R2"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app);

export {analytics, db}
export default FirebaseConfig
