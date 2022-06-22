import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {partyPostApi} from "./partyApi";


const PARTY_REGISTER = "PARTYREGISTER";

const initialState = {
    partyUsers: {},
    myId: localStorage.getItem("id"),
    shopId: {},
    me: {},
};


export const partyPost = createAsyncThunk(PARTY_REGISTER, async (payload, thunkAPI) => {
    console.log("Party register reducer......................");
    const { users,myId } = thunkAPI.getState().users;
    
    const resultload = {...payload,userId:myId, shopId:payload};
    //const { myId } = thunkAPI.getState().partyPost;
    const shopId =  await partyPostApi(resultload);
    console.log("after axios  reducer......................"+ myId+ '.......' +shopId);
    return shopId;
  });
  


export const partyUsersSlice = createSlice({
    name: "partyPost",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(partyPost.fulfilled, (state, { payload }) => {
                const newshopload = {...state, shopId : 5};
                //console.log("iside........."+ newshopload.shopId);
                console.log("iside........."+ payload);
                return {...state, partyUsers: payload};
                // if (payload) {
                //     return { ...state,  me: payload, shopId: 5};
                // } else {
                //     return { ...state, me: false };
                // }
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