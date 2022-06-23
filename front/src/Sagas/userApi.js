import { useNavigate } from 'react-router-dom';
import { customAxios, customAxiosCount } from '../Http/customAxios';
import { useDispatch, useSelector } from 'react-redux';
import { delay, put, fork, all, takeLatest, takeEvery, call } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_CHECK, LOGOUT, COUNT_REVIEW, DELETE_USER, SELECT_USERLIST_REQUEST } from './user';

function* Login(action) {
<<<<<<< HEAD
   
    console.log("saga....Login");
    
    const result = yield call(customAxios, "post",`/user/login`, action.data);
   
=======
    console.log('saga....Login');

    const result = yield call(customAxios, 'post', `/user/login`, action.data);
    console.log('this is result .....' + result);
>>>>>>> fcca894f3c6cf28efeeb6ed8be4f2c850fb88d4c
    const user = action.data;
    yield put({
        type: LOGIN_SUCCESS,
        //isLogin: action.data.token ? true : false,
        data: result.data,
    });
<<<<<<< HEAD
};

function* selectList(){
  console.log("saga user list");

};


function* deleteUserApi(){
  const { status } = yield call( customAxios, "delete","/user/",null);
if (status !== 201) {
  throw new Error("error");
=======
>>>>>>> fcca894f3c6cf28efeeb6ed8be4f2c850fb88d4c
}

function* deleteUserApi() {
    const { status } = yield call(customAxios, 'delete', '/user/', null);
    if (status !== 201) {
        throw new Error('error');
    }
    return status;
}

function* logoutApi(userId) {
    return true;
}

function* watchLogin() {
    console.log('saga  watchLogin........');
    yield takeLatest(LOGIN_REQUEST, Login);
    yield takeLatest(LOGOUT, logoutApi);
    yield takeLatest(DELETE_USER, deleteUserApi);
    yield takeLatest(LOGOUT, logoutApi);
    yield takeLatest(LOGOUT, logoutApi);
}

export default watchLogin;
