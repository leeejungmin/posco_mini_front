import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPartyList } from "./partyApi";
const initialState = {
    partys: {
        myId: localStorage.getItem("id"),
        list: {},
        loading: false,
        message: "",
        shopId: "",
    },
};

const SELECT_PARTY_LIST = "SELECT_PARTY_LIST";

export const selectPartyList = createAsyncThunk(SELECT_PARTY_LIST, async (payload, thunkAPI) => {
    const partyList = await getPartyList();
    return partyList;
});

export const ListSlice = createSlice({
    name: "partys",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(selectPartyList.fulfilled, (state, { payload }) => {
            const newPartyList = { ...state.partyList };
            newPartyList.loading = false;
            newPartyList.list = payload.partyusers;
            return { ...state, partyList: newPartyList };
        });
    },
});

export default ListSlice.reducer;
