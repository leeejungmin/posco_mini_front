import { useNavigate } from "react-router-dom";
import {customAxios} from "../Http/customAxios";
import { useDispatch, useSelector } from "react-redux";

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  isLogin: "",
  user: [],
  //여기에서 계속 stats -> islogin을 받을 수 있음
};

// 이름 정의 해주기
export const REGISTER_SUCCESS= "REGISTER_SUCCESS";

put({type: REGISTER_SUCCESS})
// export const insertUser = createAsyncThunk(INSERT_USER, async (user, thunkAPI) => {
//     console.log("register reducer......................");
//     const { users } = thunkAPI.getState().users;
//     await postUser(users, user);
//   });

export const register = (data) => {
    
    console.log("reducer...REGISTER");
    console.log(data);
    return {
      type: REGISTER_SUCCESS,
      data: data,
    };
  };