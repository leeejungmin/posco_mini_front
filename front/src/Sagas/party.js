import { createSlice } from "@reduxjs/toolkit";
import {customAxios} from "../Http/customAxios";

export const initialState = {
    partyUsers: {},
    myId: localStorage.getItem("id"),
    shopId: {},
    me: {},
    
};
export const PARTY_SUCCESS = "PARTY_SUCCESS";
export const PARTY_REQUEST = "PARTY_REQUEST";

export const partyList = (data) => {
    
    console.log("reducer / partyactino");
   console.log(localStorage.getItem("id"));

    const resultload = {...data,userId: localStorage.getItem("id"), shopId:data};
    return {
        type: PARTY_REQUEST,
        data: resultload,
    };
};

export const PartySlice = createSlice({
    name: "PartyPost",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(PARTY_SUCCESS, (state, { data }) => {
                console.log("Party Request slice... state" + state);
                return {...state, partyUsers : data }
            })

    },
});

export default PartySlice.reducer