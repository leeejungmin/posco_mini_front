import { createSlice } from "@reduxjs/toolkit";
import {customAxios} from "../Http/customAxios";

export const initialState = {
    isStatus: false,
    data:[],
    
};
export const INSERT_REVIEW_SUCCESS = "INSERT_REVIEW_SUCCESS";
export const INSERT_REVIEW_REQUEST = "INSERT_REVIEW_REQUEST";

export const insertReview = (data) => {
    // 리뷰 등록하기 
    console.log("reducer / insertReviewRequestAction");
    console.log(data);
    return {
        type: INSERT_REVIEW_REQUEST,
        data: data,
    };
};

export const reviewSlice = createSlice({
    name: "reviewPost",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(INSERT_REVIEW_SUCCESS, (state, { data }) => {
                console.log("review Request slice... state" + state);
                return {...state, isLoading: true, data : data }
            })

        // INSERT_REVIEW_SUCCESS: (state, action) => {
        //     console.log("review success slice... state" + state);
        //     console.log("review success slice... action" + action);
            
        //     state.isLoading = false;
        //     state.data = action.payload;
        // },

    },
});

export default reviewSlice.reducer