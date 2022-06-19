import { useNavigate } from "react-router-dom";
import { customAxiosList } from "../Http/customAxios";
import { useDispatch, useSelector } from "react-redux";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./register";


function* getShopList(action) {
   
    try {
        const response = yield call(customAxiosList,'get', '/shop/rate', null);
        console.log(response);
        yield put({
            type: SHOP_SUCCESS,
            //isLogin: action.data.token ? true : false,
            user: response, 
          });
    } catch (error) {
        throw error;
    }
}

function* getShopDetail(shopId) {
   
    try {
        const response = yield call(customAxiosList,'get', '/shop/rate', null);
        console.log(response);
        yield put({
            type: SHOP_SUCCESS,
            //isLogin: action.data.token ? true : false,
            user: response, 
          });
    } catch (error) {
        throw error;
    }
}



// 이벤트 리스너 같은 역할
function* watchRegister() {
    console.log("saga  watchLogin........");
    yield takeLatest(SHOP_REQUEST, getShopList);
  }
  
  export default watchRegister;
  
