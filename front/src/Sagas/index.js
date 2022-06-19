import watchShop from "./shopApi";
import watchLogin from "./userApi";
import watchRegister, { registerSaga } from "./registerApi";
import { all, fork, call} from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    call(watchLogin), 
    call(watchRegister),
    call(watchShop),
  ]
  );
}