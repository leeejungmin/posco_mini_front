import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getShopDetail } from './shopsApi';

const initialState = {
    shopDetail: {
        details: [],
        loading: false,
        message: '',
    },
};

const SELECT_SHOP_DETAIL = 'SELECT_SHOP_DETAIL';

export const selectShopDetail = createAsyncThunk(SELECT_SHOP_DETAIL, async (payload, thunkAPI) => {
    const shopDetail = await getShopDetail();
    console.log(shopDetail);
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
            newShopDetail.shops = payload;
            return { ...state, shopDetail: newShopDetail };
        });
    },
});

export default detailSlice.reducer;
