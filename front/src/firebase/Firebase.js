
import { getMessaging, getToken} from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDomainByAccessor } from "react-vis/dist/utils/scales-utils";




// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const Firebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyB-xRAvJlJNzXIcJG_dNLEcNEEdIErw1b4",
    authDomain: "tasty-ca0bd.firebaseapp.com",
    projectId: "tasty-ca0bd",
    storageBucket: "tasty-ca0bd.appspot.com",
    messagingSenderId: "890022423988",
    appId: "1:890022423988:web:e93577b28892cfcb9756e1",
    measurementId: "G-SLBST6FXB5"
  };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);


    
  // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
    const messaging = getMessaging(app);
    getToken(messaging, { vapidKey: 'BD0SAYgXvgUqi1ugm6zlH1Dh5VPTnv5sMMiMFm_zg5_sCLyFOl0g7tT3YQRL5Q_6rWxDBVzRhS4MjbpUFLYkXPw' }).then((currentToken) => {
        console.log(currentToken);
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
  
}





export default Firebase;