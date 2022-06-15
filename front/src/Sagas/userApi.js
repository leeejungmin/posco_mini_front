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
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_IN_CHECK = "LOG_IN_CHECK";

export const loginRequestAction = (data) => {
  // 로그인 요청하기
  console.log("reducer / loginRequestAction");
  console.log(data); //json userid, 123
  return {
    type: LOG_IN_REQUEST,
    data: data,
  };
};

export const loginCheck = async(data) => {
  // 로그인 확인하기
  console.log("reducer / logincheck...............");
  console.log(data); 
  //const { users, myId } = useSelector((state) => state.users);
  // if (myId) {
  //     const me = await getUserById(users, Number(myId));
  //     return me;
  // } else if (myId === 0 || myId === "0") {
  //     const me = await getUserById(users, Number(myId));
  //     return me;
  // }
  return;
};

export const getUserById = async (users, id) => {
  // const findUserById = await users.find((user) => user.id === id);
  const { data } = await customAxios("get", `/user/${id}`);
  return data;
};

// export const loginCheck = createAsyncThunk(LOGIN_CHECK, async (payload, thunkAPI) => {
//   console.log("This is loginCheck---"+localStorage.getItem("id"));
//   const { users, myId } = thunkAPI.getState().users;
//   if (myId) {
//       const me = await getUserById(users, Number(myId));
//       return me;
//   } else if (myId === 0 || myId === "0") {
//       const me = await getUserById(users, Number(myId));
//       return me;
//   }
//   return;
// });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 로그인 요청
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
      // 완료된값 user.js 24번째줄에서 리턴받은 값을 여기서 받아오네
      //데이터를 보냈으니까 action에 data가 같이 있네 ㅎㅎ;;
      // 성공이 된거니까
      // isLogin 부분 확인하고 체크하고 user부분 뿌려주고
        
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
