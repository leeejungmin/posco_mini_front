import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useParams } from 'react-router';
import { getShopDetail } from './shopsApi';

const initialState = {
    shopDetail: {
        details: {
            review: [],
            shop: [],
        },
        loading: false,
        message: '',
        shopId: '',
    },
};

const SELECT_SHOP_DETAIL = 'SELECT_SHOP_DETAIL';

export const selectShopDetail = createAsyncThunk(SELECT_SHOP_DETAIL, async (payload, thunkAPI) => {
    // console.log('payload.id:', payload);
    const shopDetail = await getShopDetail(payload.id);
    // console.log(shopDetail);
    return shopDetail;
});

export const detailSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(selectShopDetail.fulfilled, (state, { payload }) => {
            const newShopDetail = { ...state.shopDetail };
            newShopDetail.loading = false;
            newShopDetail.details = payload;
            return { ...state, shopDetail: newShopDetail };
        });
    },
});

export default detailSlice.reducer;
