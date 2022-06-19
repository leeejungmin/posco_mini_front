import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {deleteUserApi,  getcountReview,  getUserById, loginApi, logoutApi, postUser} from "./registerApi";




<<<<<<< HEAD
  const initialState = {
    shopList: {
        shops: [],
        loading: false,
        message: '',
=======
//   const initialState = {
//     shopList: {
//         shops: [],
//         loading: false,
//         message: '',
//     },
//   };

  const initialState = {
    
    shopList: [],
    loading: false,
    message: '',
    
    shopDetail: {
        details: {
            review: [],
            shop: [],
        },
        loading: false,
        message: '',
        shopId: '',
>>>>>>> 62a46dbfdb9d6983b13b820d3157d7dc5ea1bb05
    },
  };
  

  export const SHOP_SUCCESS= "SHOP_SUCCESS";
  export const SHOP_REQUEST= "SHOP_REQUEST";
<<<<<<< HEAD
  
  

  export const selectShopRequest = (data) => {
    const shopList = await getShopList();
    console.log("reducer / loginRequestAction");
    console.log(data);
    return {
      type: SHOP_REQUEST,
      data: shopList,
=======
  export const SHOP_DETAIL_REQUEST= "SHOP_DETAIL_REQUEST";
  export const SHOP_DETAIL_SUCCESS= "SHOP_DETAIL_SUCCESS";
  
  

  export const shopRequest = (data) => {
    
    console.log("reducer / shopRequest");
    console.log(data);
    return {
      type: SHOP_REQUEST,
      data: data,
    };
  };

  export const shopDetailRequest = (data) => {
    
    console.log("reducer / shopDetailRequest");
    console.log(data);
    return {
      type: SHOP_DETAIL_REQUEST,
      data: data,
>>>>>>> 62a46dbfdb9d6983b13b820d3157d7dc5ea1bb05
    };
  };

export const shopSlice = createSlice({
    name: "shopPost",
    initialState,
<<<<<<< HEAD
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
=======
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(SHOP_SUCCESS, (state, { data }) => {
            console.log("SHOP REQUEST slice..."+ data);
            return { ...state, isLoading: true, shopList: data };
        })
        
        .addCase(SHOP_DETAIL_SUCCESS, (state, { data }) => {
            console.log("SHOP SUCCESS slice..."+ data);
            const newShopDetail = { ...state.shopDetail };
            newShopDetail.loading = false;
            newShopDetail.details = data;
            return { ...state, isLoading: true, shopList: newShopDetail };
        });
    },
        

        // SHOP_SUCCESS: (state, action) => {
        // console.log("SHOP success slice...");
        // state.isLoading = false;
        // state.data = action.payload;
        // },

        // SHOP_DETAIL_REQUEST: (state) => {
        //     console.log("SHOP DETAIL REQUEST slice...");
        //     state.isLoading = true;
        //     state.data = state.data;
        //   },

        // SHOP_DETAIL_SUCCESS: (state, action) => {
        // console.log("SHOP DETAIL success slice...");
        // state.isLoading = false;
        // state.data = action.payload;
        // },
    },
    
);
>>>>>>> 62a46dbfdb9d6983b13b820d3157d7dc5ea1bb05

export default shopSlice.reducer;