importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


const firebaseApp = {
  apiKey: "AIzaSyDXI_6exEik8FzyoH3HDwMMamuU_3PYMtg",
  authDomain: "my-project-jung-a91b9.firebaseapp.com",
  projectId: "my-project-jung-a91b9",
  storageBucket: "my-project-jung-a91b9.appspot.com",
  messagingSenderId: "365520340255",
  appId: "1:365520340255:web:d267d07c5d49fe630a5c2a",
  measurementId: "G-6D7VT286WV"
};
firebase.initializeApp(firebaseApp);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload){
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "logo192.png",
    }

    return self.ServiceWorkerRegistration.showNotification(
        notificationTitle,
        notificationOptions
    )
})
