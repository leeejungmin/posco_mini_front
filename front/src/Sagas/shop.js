import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {deleteUserApi,  getcountReview,  getUserById, loginApi, logoutApi, postUser} from "./registerApi";




  const initialState = {
    shopList: {
        shops: [],
        loading: false,
        message: '',
    },
  };
  

  export const SHOP_SUCCESS= "SHOP_SUCCESS";
  export const SHOP_REQUEST= "SHOP_REQUEST";
  
  

  export const selectShopRequest = (data) => {
    const shopList = await getShopList();
    console.log("reducer / loginRequestAction");
    console.log(data);
    return {
      type: SHOP_REQUEST,
      data: shopList,
    };
  };

export const shopSlice = createSlice({
    name: "shopPost",
    initialState,
    reducers: {
        
        SHOP_REQUEST: (state) => {
            console.log("SHOP REQUEST slice...");
            state.isLoading = true;
            state.data = state.data;
          },

        SHOP_SUCCESS: (state, action) => {
        console.log("SHOP success slice...");
        state.isLoading = false;
        state.data = action.payload;
        },

    },
    
});

export default shopSlice.reducer;