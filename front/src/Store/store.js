import { configureStore, combineReducers } from '@reduxjs/toolkit';

import users from './user';
import shops from './shopslist';

import details from './shopDetail';
import mypages from './mypage';
import partys from './party';
import shop from '../Sagas/shop';
import login from '../Sagas/user';
import register from '../Sagas/register';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Sagas/index";
import reviewReg from '../Sagas/reviewReg';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    register ,
    login,
    shop,
    reviewReg,
});
// const reducer = combineReducers({
//     users,
//     shops,
//     partys,
//     reviewReg,
//     details,
//     mypages
// });

export const createStore = configureStore({
    reducer: reducer,
      // sagaMiddleware를 configureStore에 등록해줍니다.
    middleware: [sagaMiddleware]
  });
  
  // rootSaga를 실행해줍니다.
  sagaMiddleware.run(rootSaga);

export default createStore;