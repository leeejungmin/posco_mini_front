import {ToastContainer, toast } from "react-toastify";

const ReactNotificationComponent = ({title, body, image, toggleModal}) => {
    toast.info(<Display />);

    function Display() {
        return (
            <div>
                <p>{title}</p>
                <p>{body}</p>
                <img src={image} height="280" width="180"/>
                <button 
                onClick={toggleModal} >
                    close
                </button>

            </div>
        );
    }

    return <ToastContainer/>

}


export default ReactNotificationComponent;