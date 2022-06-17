import { configureStore, combineReducers } from '@reduxjs/toolkit';

import users from './user';
import shops from './shopslist';
import reviewReg from './reviewReg';
import details from './shopDetail';
import mypages from './mypage';
const reducer = combineReducers({
    users,
    shops,
    reviewReg,
    details,
    mypages
});
export default configureStore({
    reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
