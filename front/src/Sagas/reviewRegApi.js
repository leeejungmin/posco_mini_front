import { customAxios } from "../Http/customAxios";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";

import { INSERT_REVIEW_REQUEST, INSERT_REVIEW_SUCCESS } from './reviewReg';

function* review(action) {
    console.log("saga... review insert");
    // console.log(action);
    const result = yield call(customAxios, "post", "/review/create", action.data);
    console.log("yield call result");
    console.log(result);


    yield put({
        type: INSERT_REVIEW_SUCCESS,
        data:result.status,
    });
}

function* watchReview() {
    console.log("saga watchReview..........");
    yield takeLatest(INSERT_REVIEW_REQUEST, review);
}

export default watchReview;