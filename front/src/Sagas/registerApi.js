import { useNavigate } from "react-router-dom";
import {customAxios} from "../Http/customAxios";
import { useDispatch, useSelector } from "react-redux";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./register";


function* register(action) {
   
    console.log("saga....register");
    
    const result = yield call(customAxios, "post",`/user/create`, action.data);
    console.log("this is result ....." + result);
    const user = action.data;

    console.log(result);
    yield put({
      type: REGISTER_SUCCESS,
      //isLogin: action.data.token ? true : false,
      user: result.data, 
    });
}


// 이벤트 리스너 같은 역할
function* watchRegister() {
    console.log("saga  watchLogin........");
    yield takeLatest(REGISTER_REQUEST, register);
  }
  
  export default watchRegister;
  
