import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShopList from "../component/Shop/List/ShopList";
import { getShopList } from "./shopsApi";

const initialState = {
    shopList:{
        shops:[],
        loading: false,
        message: "",
    }

}

const SELECT_SHOP_LIST = "SELECT_SHOP_LIST";

export const selectShoplist =  createAsyncThunk(SELECT_SHOP_LIST, async (payload, thunkAPI)=>{
    const shopList = await getShopList();
    return shopList;
});

export const shopsSlice = createSlice({
    name:"shops",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(selectShoplist.fulfilled, (state,{payload})=>{
            const newShoplist = {...state.ShopList};
            newShoplist.loading = false;
            newShoplist.shops = payload;
            return {...state, shopList : newShoplist };
        })

    }
})
export default shopsSlice.reducer;