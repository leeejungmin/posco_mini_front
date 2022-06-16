import { configureStore, combineReducers } from "@reduxjs/toolkit";

import users from "./user";
import shops from "./shopslist";
import partys from "./party";

const reducer = combineReducers({
    users,
    shops,
    partys,
});
export default configureStore({
    reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
