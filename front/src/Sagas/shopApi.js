
import { customAxiosList } from "../Http/customAxios";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import { SHOP_DETAIL_SUCCESS, SHOP_SUCCESS,SHOP_REQUEST, SHOP_DETAIL_REQUEST} from "./shop";


function* getShopList(action) {
   
    try {
        const response = yield call(customAxiosList,'get', '/shop/rate', null);
        console.log(response);
        yield put({
            type: SHOP_SUCCESS,
            //isLogin: action.data.token ? true : false,
            data: response, 
          });
    } catch (error) {
        throw error;
    }
}

function* getShopDetail(shopId) {
   
    try {
        const response = yield call(customAxiosList,'get', `/shop/detail/${shopId}`, null);
        console.log(response);
        yield put({
            type: SHOP_DETAIL_SUCCESS,
            //isLogin: action.data.token ? true : false,
            data: response, 
          });
    } catch (error) {
        throw error;
    }
}

function* watchShop() {
    console.log("saga  watchLogin........");
    yield takeLatest(SHOP_REQUEST, getShopList);
    yield takeLatest(SHOP_DETAIL_REQUEST, getShopDetail)
  }
  
  export default watchShop;
  
