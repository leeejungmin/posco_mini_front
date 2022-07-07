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
export const PARTYLIST_SUCCESS = "PARTYLIST_SUCCESS";
export const PARTYLIST_REQUEST = "PARTYLIST_REQUEST";

export const partyList = (data) => {
    
    console.log("reducer / partyactino");
   console.log(localStorage.getItem("id"));

    const resultload = {...data,userId: localStorage.getItem("id"), shopId:data};
    return {
        type: PARTY_REQUEST,
        data: resultload,
    };
};

export const partyAllList = (data) => {
    console.log("reducer/ partyAllList");

    const resultAllList = {...data, userId: localStorage.getItem("id")};
    return {
        type: PARTYLIST_REQUEST,
        data: resultAllList,

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
            .addCase(PARTYLIST_SUCCESS, (state, {data}) => {
                console.log("party all list slice ... state " + state);
                return {...state, partyUsers : data}
            })

    },
});

export default PartySlice.reducer