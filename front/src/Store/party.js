import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPartyList, partyPostApi } from './partyApi';
const initialState = {
    partyUsers: {},
    myId: localStorage.getItem('id'),
    shopId: {},
    me: {},
    partyList: {
        list: [],
        loading: false,
    },
};
const PARTY_REGISTER = 'PARTYREGISTER';

export const partyPost = createAsyncThunk(PARTY_REGISTER, async (payload, thunkAPI) => {
    console.log('Party register reducer......................');
    console.log('amos(payload): ', payload);
    const { users, myId } = thunkAPI.getState().users;

    const resultload = { ...payload, userId: myId, shopId: payload };
    //const { myId } = thunkAPI.getState().partyPost;
    const shopId = await partyPostApi(resultload);
    console.log('after axios  reducer......................' + myId + '.......', shopId);
    return shopId;
});

const SELECT_PARTY_LIST = 'SELECT_PARTY_LIST';

export const selectPartyList = createAsyncThunk(SELECT_PARTY_LIST, async (payload, thunkAPI) => {
    const partyList = await getPartyList();
    return partyList;
});

export const ListSlice = createSlice({
    name: 'party',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(selectPartyList.fulfilled, (state, { payload }) => {
                const newPartyList = { ...state.partyList };
                newPartyList.loading = false;
                newPartyList.list = payload.partyusers;
                return { ...state, partyList: newPartyList };
            })
            .addCase(partyPost.fulfilled, (state, { payload }) => {
                const newshopload = { ...state, shopId: 5 };
                console.log('iside.........', payload);
                return { ...state, partyUsers: payload };
            });
    },
});

export default ListSlice.reducer;
