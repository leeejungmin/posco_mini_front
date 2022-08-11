import { useNavigate } from "react-router-dom";
import { customAxios } from "../Http/customAxios";
import { useDispatch, useSelector } from "react-redux";

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  isLogin: "",
  user: [],
  graph: [],
  //여기에서 계속 stats -> islogin을 받을 수 있음
};

// 이름 정의 해주기
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_IN_CHECK = "LOG_IN_CHECK";
export const GRAPH_REQUEST = "GRAPH_REQUEST";
export const GRAPH_SUCCESS = "GRAPH_SUCCESS";

export const loginRequestAction = (data) => {
  // 로그인 요청하기
  console.log("reducer / loginRequestAction");
  console.log(data);
  return {
    type: LOG_IN_REQUEST,
    data: data,
  };
};

export const graphAction = (data) => {
  // 로그인 요청하기
  console.log("reducer / GRAPH_REQUEST");
  console.log(data);
  return {
    type: GRAPH_REQUEST,
    data: data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 로그인 요청
    case GRAPH_SUCCESS: {
      console.log("reducer / 그래프 요청");
      console.log(action);
      return {
        ...state,
        graphLoading: true,
        graphInDone: false,
        logInError: null,
        graph: action,
      };
    }

    case LOG_IN_REQUEST: {
      console.log("reducer / 로그인 요청");
      console.log(action);
      return {
        ...state,
        logInLoading: true,
        logInDone: false,
        logInError: null,
      };
    }
    // 로그인 성공
    case LOG_IN_SUCCESS: {
      console.log("reducer / 로그인완료 ");
      console.log(action);
      console.log(action.token);
      localStorage.setItem("token", action.token);

      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        isLogin: true,
        user: action.user,
      };
    }

    // 로그인 실패

    case LOG_IN_FAILURE: {
      console.log("reducer / 로그인 실패");
      return {
        logInLoading: false,
        logInError: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
