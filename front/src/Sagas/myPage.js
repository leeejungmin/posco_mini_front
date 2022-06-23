import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    count : ""
    
};

export const CNT_REVIEW_SUCCESS = "CNT_REVIEW_SUCCESS";
export const CNT_REVIEW_REQEUST = "CNT_REVIEW_REQEUST";

export const cntReview = () => {
    // 리뷰 카운트 보기
    console.log("reducer / cntReview");

    return {
        type: CNT_REVIEW_REQEUST,
    };
};

export const cntReviewSlice = createSlice({
    name :"reviewCnt",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(CNT_REVIEW_SUCCESS, (state, {data}) => {
            console.log("reviewCnt request slice...");
            return {...state, count : data}
        })
    }
})

export default cntReviewSlice.reducer