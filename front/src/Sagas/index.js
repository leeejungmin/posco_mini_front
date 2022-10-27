import watchShop from "./shopApi";
import watchLogin from "./userApi";
import watchRegister, { registerSaga } from "./registerApi";
import watchReview from './reviewRegApi';
import watchParty from "./partyApi";
import { all, fork, call } from "redux-saga/effects";
import watchReviewCnt from "./myPageApi";


export default function* rootSaga() {
  yield all([
    call(watchLogin), 
    call(watchRegister),
    call(watchShop),
    call(watchReview),
    call(watchParty),
    call(watchReviewCnt),
  ]
  );
}