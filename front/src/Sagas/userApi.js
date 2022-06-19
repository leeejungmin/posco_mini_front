import { useNavigate } from "react-router-dom";
import {customAxios} from "../Http/customAxios";
import { useDispatch, useSelector } from "react-redux";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./user";


function* Login(action) {
   
    console.log("saga....Login");
    
    const result = yield call(customAxios, "post",`/user/login`, action.data);
    console.log("this is result ....." + result);
    const user = action.data;

    console.log(result);
    yield put({
      type: LOGIN_SUCCESS,
      //isLogin: action.data.token ? true : false,
      user: result.data, 
    });
}


function* watchLogin() {
    console.log("saga  watchLogin........");
    yield takeLatest(LOGIN_REQUEST, Login);
  }
  
  export default watchLogin;
  
