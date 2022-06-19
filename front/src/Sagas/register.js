import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {deleteUserApi,  getcountReview,  getUserById, loginApi, logoutApi, postUser} from "./registerApi";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";

export const initialState = {
    isLogin: false, // 로그인 시도중
    user: [],
  };
  

  export const REGISTER_SUCCESS= "REGISTER_SUCCESS";
  
  
  export function* registerSaga() {
    yield all([fork(watchLogin)]);
  }

// 이벤트 리스너 같은 역할
  function* watchLogin() {
    console.log("saga / watchLogin");
    yield takeLatest(LOG_IN_REQUEST, logIn);
  }
  

  put({type: REGISTER_SUCCESS})

export const registerSlice = createSlice({
    name: "registerPost",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(partyPost.fulfilled, (state, { payload }) => {
                const newshopload = {...state, shopId : 5};
                //console.log("iside........."+ newshopload.shopId);
                console.log("iside........."+ payload);
                return {...state, partyUsers: payload};
                
            })
           
    },
});

export default registerSlice.reducer;