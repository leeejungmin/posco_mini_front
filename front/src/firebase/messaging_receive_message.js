import { getMessaging, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { List } from "reactstrap";
import {cityConverter} from "./data_types";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = {
  apiKey: "AIzaSyDXI_6exEik8FzyoH3HDwMMamuU_3PYMtg",
  authDomain: "my-project-jung-a91b9.firebaseapp.com",
  projectId: "my-project-jung-a91b9",
  storageBucket: "my-project-jung-a91b9.appspot.com",
  messagingSenderId: "365520340255",
  appId: "1:365520340255:web:d267d07c5d49fe630a5c2a",
  measurementId: "G-6D7VT286WV"
};
const messaging = getMessaging(firebaseApp);
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
 
});