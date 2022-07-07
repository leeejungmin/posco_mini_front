import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import {customAxios, customAxiosCount} from "../Http/customAxios";
import { useDispatch, useSelector } from "react-redux";

export const initialState = {
  users: "",
  myId: localStorage.getItem("id"),
  isLogin: localStorage.getItem("id") === undefined ? true : false,
  me: {},
  count:"",
  
};


export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const INSERT_USER = "INSERT_USER";
export const LOGIN_CHECK = "LOGIN_CHECK";
export const DELETE_USER = "DELETE_USER";
export const SELECT_USERLIST_SUCCESS = "SELECT_USERLIST_SUCCESS";
export const SELECT_USERLIST_REQUEST = "SELECT_USERLIST_REQUEST";
export const COUNT_REVIEW = "COUNT_REVIEW";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export const loginRequestAction = (data) => {
  // 로그인 요청하기
  console.log("reducer / loginRequestdata");
  console.log(data); 
  return {
    type: LOGIN_REQUEST,
    data: data.user,
  };
};

export const loginCheck = () => {
  // 로그인 확인하기
  const tokenc =  localStorage.getItem("token");
 // console.log("reducer / logincheck..............."+tokenc);
  console.log(tokenc? true : false)
  
  //return tokenc? true : false
  return {
    type : LOGIN_SUCCESS,
    data : tokenc? true : false,
  }
};

export const logout = async (users, id) => {
  return {
    type : LOGOUT,
  }
};

export const deleteUser = async (users, id) => {
  return {
    type : DELETE_USER,
  }
};

export const getUserById = async ( id) => {
 
  console.log("reducer / getUserById");
  console.log(id);
  
  return {
    type: SELECT_USERLIST_REQUEST,
  }
  
};

export const countReview = async () => {
  console.log("count review ...........first");
  const countRes =  await customAxiosCount("get", "/review/count");
  console.log('countres........'+countRes);
  return countRes.data;
};

const loginSlice = createSlice({
  name: "loginPost",
  initialState,
  reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(LOGIN_SUCCESS, (state, { data }) => {
        console.log("login success slice...");
        localStorage.setItem("id", data.user.id);
        localStorage.setItem("token", data.token);
        return {
          ...state,
          isLogin: data.isLogin, //
          me: data.user,
          myId: data.user.id,
      };
      })
      .addCase(LOGIN_CHECK, (state, { data }) => {
        console.log("login check success slice...");
        localStorage.setItem("id", data.user.id);
        localStorage.setItem("token", data.token);
        return {
          ...state,
          isLogin: data.isLogin, //
          me: data.user,
          myId: data.user.id,
      };
      })
      .addCase(SELECT_USERLIST_SUCCESS,(state, {data}) => {
        console.log("mypage userlist success slice...");
        // console.log(data);
        // return{
        //   ...state,
        //   me : data
        // }
      })


      .addCase(DELETE_USER, (state, { data }) => {
        console.log("login check delete slice...");
        localStorage.setItem("id", data.user.id);
        localStorage.setItem("token", data.token);
        return {...state, me : data};
      })
      
    .addCase(LOGOUT, (state, { payload }) => {
      console.log("logout check slice...");
      
      localStorage.clear();
      return { ...state, isLogin: false, me: {}, myId: "" };
  })
  },
  
});
export default loginSlice.reducer;

