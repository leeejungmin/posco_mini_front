// 등록하는 부분


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { insertReviewApi } from "./reviewRegApi";

const INSERT_REVIEW = "INSERT_REVIEW";

const initialState = {
    reviews: {},
    // myId: localStorage.getItem("id"),
    // isLogin: localStorage.getItem("id") === undefined ? true : false,
    
    me: {},
};

export const insertReview = createAsyncThunk(
    INSERT_REVIEW, async(review, thunkAPI) => {
        console.log(review);
        
        // const {reviews} = thunkAPI.getState().reviewReg.reviews;
        // console.log(thunkAPI.getState());
        await insertReviewApi( review);
    }
);

export const reviewSlice = createSlice({
    name:"reviews",
    initialState ,
    reducers: {},
    extraReducers:(builder) =>{
        builder
            .addCase(insertReview.fulfilled, (state, {payload}) => {
                return {...state, reviews : payload, me : localStorage.getItem('id')};
            })
    },
});

export default reviewSlice.reducer;