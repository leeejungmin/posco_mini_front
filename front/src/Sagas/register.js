import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {deleteUserApi,  getcountReview,  getUserById, loginApi, logoutApi, postUser} from "./registerApi";




  const initialState = {
    users: "",
    myId: localStorage.getItem("id"),
    isLogin: localStorage.getItem("id") === undefined ? true : false,
    me: {},
    count:"",
  };
  

  export const REGISTER_SUCCESS= "REGISTER_SUCCESS";
  export const REGISTER_REQUEST= "REGISTER_REQUEST";
  
  

  export const registerRequest = (data) => {
    
    console.log("reducer / loginRequestAction");
    console.log(data);
    return {
      type: REGISTER_REQUEST,
      data: data,
    };
  };

export const registerSlice = createSlice({
    name: "registerPost",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(REGISTER_SUCCESS, (state, { data }) => {
                  return { ...state, users: data };

          }
          )
    },
    
});

export default registerSlice.reducer;