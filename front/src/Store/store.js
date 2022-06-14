import { configureStore, combineReducers } from "@reduxjs/toolkit";

import users from "./user";
const reducer = combineReducers({
    users,
});
export default configureStore({
    reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
