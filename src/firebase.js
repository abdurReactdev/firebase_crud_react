// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNjmEpL6ythnmV_pQh3C86qliDkvXg2n4",
  authDomain: "todo-71d46.firebaseapp.com",
  projectId: "todo-71d46",
  storageBucket: "todo-71d46.appspot.com",
  messagingSenderId: "461299181619",
  appId: "1:461299181619:web:1df5f4b66f1459606f1b46",
  measurementId: "G-M7J5CF4B92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
