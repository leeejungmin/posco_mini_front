import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { customAxios } from "../Http/customAxios";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import { CNT_REVIEW_REQEUST, CNT_REVIEW_SUCCESS } from "./myPage";
function* reviewCnt(action) {
    console.log("saga.... review cnt");
    const result = yield call(customAxios, "get", "/review/count" , null);
    console.log("yiled call result");
    console.log( result);

    yield put({
        type: CNT_REVIEW_SUCCESS,
        data: result
    });
}

function* watchReviewCnt() {
    console.log("saga watchReviewCnt..........");
    yield takeLatest(CNT_REVIEW_REQEUST, reviewCnt);

}

export default watchReviewCnt;