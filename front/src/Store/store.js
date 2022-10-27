import { configureStore, combineReducers } from '@reduxjs/toolkit';

import users from './user';
import shops from './shopslist';

import details from './shopDetail';

import partys from './party';
import shop from '../Sagas/shop';
import login from '../Sagas/user';
import register from '../Sagas/register';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Sagas/index";
import reviewReg from '../Sagas/reviewReg';
import party from '../Sagas/party';
import mypages from "../Sagas/myPage";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    register ,
    login,
    shop,
    reviewReg,
    party,
    mypages,
});


export const createStore = configureStore({
    reducer: reducer,
      // sagaMiddleware를 configureStore에 등록해줍니다.
    middleware: [sagaMiddleware]
  });
  
  // rootSaga를 실행해줍니다.
  sagaMiddleware.run(rootSaga);

export default createStore;