import { configureStore, combineReducers } from "@reduxjs/toolkit";

import users from "./user";
import shops from "./shopslist";

const reducer = combineReducers({
    users,
    shops,
});
export default configureStore({
    reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
