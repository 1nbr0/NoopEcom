import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsVhjLA_tWN4xL6wE41d8uMcxtupj6qgs",
  authDomain: "noopecom.firebaseapp.com",
  projectId: "noopecom",
  storageBucket: "noopecom.appspot.com",
  messagingSenderId: "212012087890",
  appId: "1:212012087890:web:d79abc9fe456b798977d8b",
  measurementId: "G-ZWWP8WHK4S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
