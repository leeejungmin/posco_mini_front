import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteUserApi } from './mypageApi';
import { getUserById } from './userApi';

const DELETE_USER = 'DELETE_USER';

const initialState = {
    users: '',
    myId: localStorage.getItem('id'),
    isLogin: localStorage.getItem('id') === undefined ? true : false,
    me: {},
};

export const deleteUser = createAsyncThunk(DELETE_USER, async (user, thunkAPI) => {
    const { users } = thunkAPI.getState().users;
    await deleteUserApi(users, user);
});

export const mypageSlice = createSlice({
    name: 'mypage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
            return { ...state, isLogin: false, me: {}, myId: '' };
        });
    },
});

export default mypageSlice.reducer;
