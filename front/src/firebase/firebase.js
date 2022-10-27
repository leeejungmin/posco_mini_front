// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { ReactNotifications, Store  } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXI_6exEik8FzyoH3HDwMMamuU_3PYMtg",
  authDomain: "my-project-jung-a91b9.firebaseapp.com",
  projectId: "my-project-jung-a91b9",
  storageBucket: "my-project-jung-a91b9.appspot.com",
  messagingSenderId: "365520340255",
  appId: "1:365520340255:web:d267d07c5d49fe630a5c2a",
  measurementId: "G-6D7VT286WV"
};

// Initialize Firebase
// const analytics = getAnalytics(app);

//웹푸시 인증서 : BLyC6_MuoiCXwSH6wP4OmDzAFRZAxpFHzUsd4f0-Lvvu7pPnqe-hW9r57_QUJz4r8_Ebwu1PSgR51MdgKJpXN8I
//발신자 ID 365520340255

export const Firebase = () => {
  const [istrue, setIstrue] = useState(false);
  const [ notification, setNotification] = useState( {
    title: "Wonderful!",
    message: "Configurable",
    type: "success",
    insert: "top",
    animationIn: ["animate__animated animate__fadeIn"], 
    animationOut: ["animate__animated animate__fadeOut"], 
    dismiss: { duration: 2000 },
    dismissable: { click: true }
    
  }
  );
  const [token, tokenSet] = useState('');
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);

  
  const displaymessage = () => {
    Store.addNotification({
        ...notification,
        container: 'top-right'
        
    })
  }

    useEffect(() => {
      
      },[istrue]);
  

    getToken(messaging, { vapidKey: "BLyC6_MuoiCXwSH6wP4OmDzAFRZAxpFHzUsd4f0-Lvvu7pPnqe-hW9r57_QUJz4r8_Ebwu1PSgR51MdgKJpXN8I" }).then((currentToken) => {
      tokenSet(currentToken);
      console.log("token...............",currentToken);

      if (currentToken) {
                 
          onMessage(messaging, (payload) => {
            setIstrue(true);
            console.log('Message received................ ', payload);
            
            console.log('Message received................ ', payload.notification.title);
            console.log('Message received................ ', payload.notification.body);
           
            setNotification({
              ...notification,
              title: payload.notification.title,
              message : payload.notification.body,
            
            })

            console.log("..........",notification);
            displaymessage();

          });
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    
    });
  
    return (
      <div>
        {istrue ? (
         
         <button onClick = {() => displaymessage()}></button>
        ) : (<> </>)
        }
        <ReactNotifications/>
      </div>
      
    );
};


