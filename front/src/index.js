import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Store/store";
<<<<<<< HEAD
//import createStore from './reducers/store';
const root = ReactDOM.createRoot(document.getElementById("root"));
=======
//import createStore from "./Sagas/index";
import createStore from './reducers/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
>>>>>>> 62a46dbfdb9d6983b13b820d3157d7dc5ea1bb05
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
