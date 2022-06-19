import { useNavigate } from "react-router-dom";
import {customAxios} from "../Http/customAxios";
import { useDispatch, useSelector } from "react-redux";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_CHECK } from "./user";


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

function* getUserById(users, id) {
  // const findUserById = yield call( users.find((user) => user.id === id);
  const { data } = yield call(customAxios, "get",`/user/me`, action.data);
  return data;
};

function* deleteUserApi(){
  const { status } = yield call( customAxios, "delete","/user/",null);
if (status !== 201) {
  throw new Error("error");
}
return status;

};

function* getcountReview (){
  const countRes = yield call( customAxios,"get", "/review/count");
  return countRes;
}
function* logoutApi (userId){
    return true;
};

function* watchLogin() {
    console.log("saga  watchLogin........");
    yield takeLatest(LOGIN_REQUEST, Login);
    yield takeLatest(LOGOUT, logoutApi);
    yield takeLatest(SELECT_USERLIST, getUserById);
    yield takeLatest(COUNT_REVIEW, getcountReview);
  }
  
  export default watchLogin;
  
