import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getUserById, loginApi, logoutApi, postUser} from "./userApi";


const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const INSERT_USER = "INSERT_USER";
const LOGIN_CHECK = "LOGIN_CHECK";

const initialState = {
    users: "",
    myId: localStorage.getItem("id"),
    isLogin: localStorage.getItem("id") === undefined ? true : false,
    me: {},
};

export const loginCheck = createAsyncThunk(LOGIN_CHECK, async (payload, thunkAPI) => {
    console.log("This is loginCheck---"+localStorage.getItem("id"));
    const { users, myId } = thunkAPI.getState().users;
    if (myId) {
        const me = await getUserById(users, Number(myId));
        return me;
    } else if (myId === 0 || myId === "0") {
        const me = await getUserById(users, Number(myId));
        return me;
    }
    return;
});

export const login = createAsyncThunk(LOGIN, async (user, thunkAPI) => {
    console.log("login reducer......................");
    console.log(user);
    const { users } = thunkAPI.getState().users;
    const isLogin = await loginApi(users, user);
    return isLogin;
});

export const insertUser = createAsyncThunk(INSERT_USER, async (user, thunkAPI) => {
    console.log("register reducer......................");
    const { users } = thunkAPI.getState().users;
    await postUser(users, user);
  });
  
export const logout = createAsyncThunk(LOGOUT, async (payload, thunkAPI) => {
    const { myId } = thunkAPI.getState().users;
    const isLogout = await logoutApi(myId);
    return isLogout;
});

//
export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginCheck.fulfilled, (state, { payload }) => {
                if (payload) {
                    return { ...state, isLogin: true, me: payload };
                } else {
                    return { ...state, isLogin: false };
                }
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                if (payload.isLogin) {
                    console.log("this is payload after isLogin" + payload);
                    localStorage.setItem("id", payload.user.id);
                    
                    return {
                        ...state,
                        isLogin: payload.login, //
                        me: payload.user,
                        myId: payload.user.id,
                    };
                } else {
                    return { ...state, isLogin: false };
                }
            })
            .addCase(insertUser.fulfilled, (state, { payload }) => {
                return { ...state, users: payload };
            })
            .addCase(logout.fulfilled, (state, { payload }) => {
                localStorage.removeItem("id");
                return { ...state, isLogin: false, me: {}, myId: "" };
            })
    },
});

export default usersSlice.reducer;