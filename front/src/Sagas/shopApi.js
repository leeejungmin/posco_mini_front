<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { customAxiosList } from "../Http/customAxios";
import { useDispatch, useSelector } from "react-redux";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./register";
=======

import { customAxiosList } from "../Http/customAxios";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import { SHOP_DETAIL_SUCCESS, SHOP_SUCCESS,SHOP_REQUEST, SHOP_DETAIL_REQUEST} from "./shop";
>>>>>>> 62a46dbfdb9d6983b13b820d3157d7dc5ea1bb05


function* getShopList(action) {
   
    try {
        const response = yield call(customAxiosList,'get', '/shop/rate', null);
        console.log(response);
        yield put({
            type: SHOP_SUCCESS,
            //isLogin: action.data.token ? true : false,
<<<<<<< HEAD
            user: response, 
=======
            data: response, 
>>>>>>> 62a46dbfdb9d6983b13b820d3157d7dc5ea1bb05
          });
    } catch (error) {
        throw error;
    }
}

function* getShopDetail(shopId) {
   
    try {
<<<<<<< HEAD
        const response = yield call(customAxiosList,'get', '/shop/rate', null);
        console.log(response);
        yield put({
            type: SHOP_SUCCESS,
            //isLogin: action.data.token ? true : false,
            user: response, 
=======
        const response = yield call(customAxiosList,'get', `/shop/detail/${shopId}`, null);
        console.log(response);
        yield put({
            type: SHOP_DETAIL_SUCCESS,
            //isLogin: action.data.token ? true : false,
            data: response, 
>>>>>>> 62a46dbfdb9d6983b13b820d3157d7dc5ea1bb05
          });
    } catch (error) {
        throw error;
    }
}

<<<<<<< HEAD


// 이벤트 리스너 같은 역할
function* watchRegister() {
    console.log("saga  watchLogin........");
    yield takeLatest(SHOP_REQUEST, getShopList);
  }
  
  export default watchRegister;
=======
function* watchShop() {
    console.log("saga  watchLogin........");
    yield takeLatest(SHOP_REQUEST, getShopList);
    yield takeLatest(SHOP_DETAIL_REQUEST, getShopDetail)
  }
  
  export default watchShop;
>>>>>>> 62a46dbfdb9d6983b13b820d3157d7dc5ea1bb05
  
