//!https://www.youtube.com/watch?v=drF8HbnW87w

/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8KoJqMuVOWjJrQn-993vBNNaJlGk2Blk",
  authDomain: "todo-app-94bb7.firebaseapp.com",
  projectId: "todo-app-94bb7",
  storageBucket: "todo-app-94bb7.appspot.com",
  messagingSenderId: "695050222131",
  appId: "1:695050222131:web:45a5e284e3c5e0cb6a4146",
};

//! amryousef04 الاميل الخاص بــ  firebase افتح

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
