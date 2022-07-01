import { ReactNotifications, Store  } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { useEffect, useState } from "react";

const Test = () => {
    
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
    //   const notification = {
    //     title: "Wonderful!",
    //     message: "Configurable",
    //     type: "success",
    //     insert: "top",
    //     animationIn: ["animate__animated animate__fadeIn"], 
    //     animationOut: ["animate__animated animate__fadeOut"], 
    //     dismiss: { duration: 2000 },
    //     dismissable: { click: true }
    //   }

    const displaymessage = () => {
        Store.addNotification({
            ...notification,
            container: 'top-right'
            
        })
      }

return (
    <div>
     
       <div>Bon Morning</div>
       <button onClick = {() => displaymessage()}></button>
    <ReactNotifications/>
     
    </div>
    
  );}

  export default Test;