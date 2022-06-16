import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {partyPostApi} from "./partyApi";


const PARTY_REGISTER = "PARTYREGISTER";

const initialState = {
    partyUsers: "",
    myId: localStorage.getItem("id"),
    me: {},
};

// export const loginCheck = createAsyncThunk(LOGIN_CHECK, async (payload, thunkAPI) => {
//     console.log("This is loginCheck---"+localStorage.getItem("id"));
//     const { users, myId } = thunkAPI.getState().users;
//     if (myId) {
//         const me = await getUserById(users, Number(myId));
//         return me;
//     } else if (myId === 0 || myId === "0") {
//         const me = await getUserById(users, Number(myId));
//         return me;
//     }
//     return;
// });


export const partyPost = createAsyncThunk(PARTY_REGISTER, async (payload, thunkAPI) => {
    console.log("Party register reducer......................");
    const { partyUsers } = thunkAPI.getState().partyUsers;
    await partyPostApi(partyUsers);
  });
  


export const partyUsersSlice = createSlice({
    name: "partyUsers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(partyPost.fulfilled, (state, { payload }) => {
                if (payload) {
                    return { ...state,  me: payload };
                } else {
                    return { ...state, me: false };
                }
            })
            // .addCase(login.fulfilled, (state, { payload }) => {
            //     if (payload.isLogin) {
            //         console.log("this is payload after isLogin" + payload);
            //         localStorage.setItem("id", payload.user.id);
                    
            //         return {
            //             ...state,
            //             isLogin: payload.login, //
            //             me: payload.user,
            //             myId: payload.user.id,
            //         };
            //     } else {
            //         return { ...state, isLogin: false };
            //     }
            // })
          
    },
});

export default partyUsersSlice.reducer;