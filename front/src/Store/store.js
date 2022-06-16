import { configureStore, combineReducers } from "@reduxjs/toolkit";

import users from "./user";
import shops from "./shopslist";
import reviewReg from "./reviewReg";
const reducer = combineReducers({
    users,
    shops,
    reviewReg
});
export default configureStore({
    reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
