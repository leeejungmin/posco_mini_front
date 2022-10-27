import { configureStore, combineReducers } from "@reduxjs/toolkit";
import users from "../Sagas/userApi";
import userOrigin from "../Store/user"
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Sagas";
import shops from "../Store/shopslist";
import register from "../Sagas/register";
const reducer = combineReducers({
  register,
  });

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  
  const store = configureStore({
    reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()
      // ,sagaMiddleware
    ],
  });

  return store;
};

export default createStore;
