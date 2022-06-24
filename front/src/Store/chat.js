import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getChatList } from './chatApi';

const initialState = {
    chatList: [],
};
const SELECT_CHAT_LIST = 'SELECT_CHAT_LIST';

export const selectChatList = createAsyncThunk(SELECT_CHAT_LIST, async (payload, thunkAPI) => {
    const chatList = await getChatList(payload);
    return chatList;
});

export const ChatListSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(selectChatList.fulfilled, (state, { payload }) => {
            console.log('amos(chat payload): ', payload);
            const newChatList = { ...state.chatList };
            newChatList.chatList = payload;
            return { ...state, chatList: payload };
        });
    },
});

export default ChatListSlice.reducer;
