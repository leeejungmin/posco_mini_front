import { configureStore, combineReducers } from "@reduxjs/toolkit";
import users from "../Sagas/userApi";
import userOrigin from "../Store/user"
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Sagas";
const reducer = combineReducers({
  users,
  });

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
