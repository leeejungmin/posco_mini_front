import { configureStore, combineReducers } from '@reduxjs/toolkit';

import users from './user';
import shops from './shopslist';
import reviewReg from './reviewReg';
import details from './shopDetail';
import mypages from './mypage';
import partys from './party';
import chats from './chat';
const reducer = combineReducers({
    users,
    shops,
    partys,
    reviewReg,
    details,
    mypages,
    chats,
});
export default configureStore({
    reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
