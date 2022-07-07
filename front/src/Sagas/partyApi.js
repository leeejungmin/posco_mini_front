import { useNavigate } from "react-router-dom";
import {customAxios} from "../Http/customAxios";
import { useDispatch, useSelector } from "react-redux";
import { delay, put, fork, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import { PARTYLIST_REQUEST, PARTYLIST_SUCCESS, PARTY_REQUEST, PARTY_SUCCESS } from "./party";


function* party(action) {
   
    console.log(action);
    
    const result = yield call(customAxios, "post",`/party/create`, action.data);
    console.log("this is result ....." + result);
    console.log(result);
    yield put({
      type: PARTY_SUCCESS,
      data: result.data, 
    });
}

function* partyList(action){

  const result = yield call(customAxios, "get", `/party/`, action.data);

  yield put({
    type: PARTYLIST_SUCCESS,
    data: result.data,
  })
}


// 이벤트 리스너 같은 역할
function* watchParty() {
    console.log("saga  watchLogin........");
    yield takeLatest(PARTY_REQUEST, party);
    yield takeLatest(PARTYLIST_REQUEST, partyList);
  }
  
  export default watchParty;
  
