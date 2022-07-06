
import { customAxiosList } from "../Http/customAxios";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import { SHOP_DETAIL_SUCCESS, SHOP_SUCCESS,SHOP_REQUEST, SHOP_DETAIL_REQUEST} from "./shop";


function* getShopList(action) {
   
    try {
        const response = yield call(customAxiosList,'get', '/shoplist/rate', null);
        console.log(response);
        yield put({
            type: SHOP_SUCCESS,
            data: response, 
          });
    } catch (error) {
        throw error;
    }
}

function* getShopDetail(action) {
   
    
   
    const id = action.data;
    const response = yield call(customAxiosList,'post', `/shopdetail/detail/${id}`, null);
    console.log("getShopaxios........"+response);
    yield put({
        type: SHOP_DETAIL_SUCCESS,
        data: response, 
        });
    
}

function* watchShop() {
    yield takeLatest(SHOP_REQUEST, getShopList);
    yield takeLatest(SHOP_DETAIL_REQUEST, getShopDetail)
  }
  
  export default watchShop;
  
