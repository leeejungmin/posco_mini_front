import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteUserApi, getUserList } from './mypageApi';
import { getUserById } from './userApi';

const DELETE_USER = 'DELETE_USER';
const SELECT_USERLIST = 'SELECT_USERLIST';

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

export const selectUserlist = createAsyncThunk(SELECT_USERLIST, async (payload, thunkAPI) => {
    console.log(payload); // myId값이니까
    const userList = await getUserList(payload);
    return userList;
    
});

export const mypageSlice = createSlice({
    name: 'mypage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
            return { ...state, isLogin: false, me: {}, myId: '' };
        })
        // .addCase(selectUserlist.fulfilled, (state, {payload}) => {
        //     console.log(payload);
        //     return {...state, isLogin:true,  me:{}};
        // })
    },
});

export default mypageSlice.reducer;
