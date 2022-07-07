import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteUserApi, getcountReview, getUserById, loginApi, logoutApi, postUser } from './registerApi';

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
        review: [],
        shop: [],
        loading: false,
        message: '',
        shopId: '',
    },
};

export const SHOP_SUCCESS = 'SHOP_SUCCESS';
export const SHOP_REQUEST = 'SHOP_REQUEST';
export const SHOP_DETAIL_REQUEST = 'SHOP_DETAIL_REQUEST';
export const SHOP_DETAIL_SUCCESS = 'SHOP_DETAIL_SUCCESS';

export const shopRequest = (data) => {
    return {
        type: SHOP_REQUEST,
        data: data,
    };
};

export const shopDetailRequest = (data) => {
    return {
        type: SHOP_DETAIL_REQUEST,
        data: data.id,
    };
};

export const shopSlice = createSlice({
    name: 'shopPost',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(SHOP_SUCCESS, (state, { data }) => {
                return { ...state, isLoading: true, shopList: data };
            })

            .addCase(SHOP_DETAIL_SUCCESS, (state, { data }) => {
                return { ...state, shopDetail: data };
            });
    },
});

export default shopSlice.reducer;
