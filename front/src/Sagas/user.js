import {
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
  } from "./userApi";
  import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
  import {customAxios} from "../Http/customAxios";
  
  // yield all 보고있다가 실행시키겠다
  export default function* userSaga() {
    yield all([fork(watchLogin)]);
  }

// 이벤트 리스너 같은 역할
  function* watchLogin() {
    console.log("saga / watchLogin");
    yield takeLatest(LOG_IN_REQUEST, logIn);
  }
  
  function* logIn(action) {
    
    try {
      console.log("saga / logIn");
      // call 로 axios를 부르고 나온결과를
      // put으로 넣는다.
      console.log(action.data);
      // action에 데이터가 담겨있다.
      const result = yield call(customAxios, "post", `/user/login`, action.data);
      console.log("this is yield call"+result);
      //그럼 result 에서 토큰값이 있을거니까
      
      yield put({
        type: LOG_IN_SUCCESS,
        isLogin: result.token ? true : false,
        user: result.user, // 결과값보내주기
        token : result.token,
      });
    } catch (error) {
        console.log(error);
      yield put({
        type: LOG_IN_FAILURE,
        //error: error.response.data,
      });
    }
  }
  
  
  
  