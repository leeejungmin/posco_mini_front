import userSaga from "./user";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  //all 배열안에 있는거 한번에 실행
  yield all([
    // fork는 generator함수를 실행하도록 하는 것 !== call
    fork(userSaga),
  ]);
}