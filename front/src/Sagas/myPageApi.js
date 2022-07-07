import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { customAxios } from '../Http/customAxios';
import { delay, put, fork, all, takeLatest, takeEvery, call } from 'redux-saga/effects';
import { CNT_REVIEW_REQEUST, CNT_REVIEW_SUCCESS } from './myPage';
function* reviewCnt(action) {
    const result = yield call(customAxios, 'get', '/review/count', null);

    yield put({
        type: CNT_REVIEW_SUCCESS,
        data: result,
    });
}

function* watchReviewCnt() {
    yield takeLatest(CNT_REVIEW_REQEUST, reviewCnt);
}

export default watchReviewCnt;
