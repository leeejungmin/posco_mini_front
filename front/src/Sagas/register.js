import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {deleteUserApi,  getcountReview,  getUserById, loginApi, logoutApi, postUser} from "./registerApi";




  const initialState = {
    isLogin: false, 
    data: [],
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
    reducers: {
        
        REGISTER_REQUEST: (state) => {
            console.log("register REQUEST slice...");
            state.isLoading = true;
            state.data = state.data;
          },

        REGISTER_SUCCESS: (state, action) => {
        console.log("register success slice...");
        state.isLoading = false;
        state.data = action.payload;
        },

    },
    
});

export default registerSlice.reducer;