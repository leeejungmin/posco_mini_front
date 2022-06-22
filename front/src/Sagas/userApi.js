import { useNavigate } from "react-router-dom";
import {customAxios,customAxiosCount} from "../Http/customAxios";
import { useDispatch, useSelector } from "react-redux";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_CHECK, LOGOUT, COUNT_REVIEW, DELETE_USER, SELECT_USERLIST_REQUEST } from "./user";


function* Login(action) {
   
    console.log("saga....Login");
    
    const result = yield call(customAxios, "post",`/user/login`, action.data);
   
    const user = action.data;
    yield put({
      type: LOGIN_SUCCESS,
      //isLogin: action.data.token ? true : false,
      data: result.data, 
    });
};

function* selectList(){
  console.log("saga user list");

};


function* deleteUserApi(){
  const { status } = yield call( customAxios, "delete","/user/",null);
if (status !== 201) {
  throw new Error("error");
}
return status;

};


function* logoutApi (userId){
    return true;
};

function* watchLogin() {
    console.log("saga  watchLogin........");
    yield takeLatest(LOGIN_REQUEST, Login);
    yield takeLatest(LOGOUT, logoutApi);
    yield takeLatest(DELETE_USER, deleteUserApi);
    yield takeLatest(LOGOUT, logoutApi);
    yield takeLatest(LOGOUT, logoutApi);
    yield takeLatest(SELECT_USERLIST_REQUEST, selectList);
  }
  
  export default watchLogin;
  
