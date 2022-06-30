// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyB-xRAvJlJNzXIcJG_dNLEcNEEdIErw1b4",
  authDomain: "tasty-ca0bd.firebaseapp.com",
  projectId: "tasty-ca0bd",
  storageBucket: "tasty-ca0bd.appspot.com",
  messagingSenderId: "890022423988",
  appId: "1:890022423988:web:e93577b28892cfcb9756e1",
  measurementId: "G-SLBST6FXB5"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);