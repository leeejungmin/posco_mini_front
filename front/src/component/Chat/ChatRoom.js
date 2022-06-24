import React, { useEffect, useState } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import { useDispatch, useSelector } from 'react-redux';
import { countReview, selectUserlist } from '../../Store/user';
import { customAxiosList } from '../../Http/customAxios';
import { selectChatList } from '../../Store/chat';

var stompClient = null;
const ChatRoom = () => {
    const [privateChats, setPrivateChats] = useState(new Map()); //사설방
    const [publicChats, setPublicChats] = useState([]); //공설방
    const [tab, setTab] = useState('CHATROOM');
    const user = useSelector((state) => state.users); // user 디테일 정보

    const dispatch = useDispatch();
    const getChatList = () => {
        dispatch(selectChatList());
    };

    useEffect(() => {
        // 받아오는 axios 실행
        getUserlist();
        registerUser();
    }, []);

    const chatList = useSelector((state) => state.chats.chatList);
    useEffect(() => {
        getChatList();
    }, []);

    const getUserlist = async (e) => {
        dispatch(selectUserlist(user.me.id));
        dispatch(countReview());
    };

    const [userData, setUserData] = useState({
        username: user.me.name,
        receivername: '',
        connected: false,
        message: '',
    });

    const connect = () => {
        let Sock = new SockJS('http://localhost:8000/chat/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
        setUserData({ ...userData, connected: true });
        stompClient.subscribe('/chatroom/public', onMessageReceived);
        userJoin();
        console.log('새로운 내용: ', publicChats);
        console.log('기존 내용: ', chatList);
    };

    const userJoin = () => {
        var chatMessage = {
            senderName: user.me.name,
            status: 'JOIN',
        };
        stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
    };

    const onMessageReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        switch (payloadData.status) {
            case 'JOIN':
                if (!privateChats.get(payloadData.senderName)) {
                    privateChats.set(payloadData.senderName, []);
                    setPrivateChats(new Map(privateChats));
                }
                break;
            case 'MESSAGE':
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;
            default:
                break;
        }
    };

    const onError = (err) => {
        console.log(err);
    };

    const handleMessage = (event) => {
        const { value } = event.target;
        setUserData({ ...userData, message: value });
    };
    const sendValue = () => {
        if (stompClient) {
            var chatMessage = {
                senderName: user.me.name,
                message: userData.message,
                status: 'MESSAGE',
            };
            stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
            setUserData({ ...userData, message: '' });
        }
    };

    const sendPrivateValue = () => {
        if (stompClient) {
            var chatMessage = {
                senderName: user.me.name,
                receiverName: tab,
                message: userData.message,
                status: 'MESSAGE',
            };

            if (user.me.name !== tab) {
                privateChats.get(tab).push(chatMessage);
                setPrivateChats(new Map(privateChats));
            }
            stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
            setUserData({ ...userData, message: '' });
        }
    };

    const registerUser = () => {
        connect();
    };
    return (
        <div className="container">
            {userData.connected ? (
                <div className="chat-box">
                    <div className="member-list">
                        <ul>
                            <li
                                onClick={() => {
                                    setTab('CHATROOM');
                                }}
                                className={`member ${tab === 'CHATROOM' && 'active'}`}
                            >
                                Chatroom
                            </li>
                        </ul>
                    </div>
                    {tab === 'CHATROOM' && (
                        <div className="chat-content">
                            <ul className="chat-messages">
                                {chatList.map((chat, index) => (
                                    <li className={`message ${chat.senderName === user.me.name && 'self'}`} key={index}>
                                        {chat.senderName !== user.me.name && <div className="avatar">{chat.senderName}</div>}
                                        <div className="message-data">{chat.message}</div>
                                        {chat.senderName === user.me.name && <div className="avatar self">{chat.senderName}</div>}
                                    </li>
                                ))}
                                {publicChats.map((chat, index) => (
                                    <li className={`message ${chat.senderName === user.me.name && 'self'}`} key={index}>
                                        {chat.senderName !== user.me.name && <div className="avatar">{chat.senderName}</div>}
                                        <div className="message-data">{chat.message}</div>
                                        {chat.senderName === user.me.name && <div className="avatar self">{chat.senderName}</div>}
                                    </li>
                                ))}
                            </ul>

                            <div className="send-message">
                                <input
                                    type="text"
                                    className="input-message"
                                    placeholder="enter the message"
                                    value={userData.message}
                                    onChange={handleMessage}
                                />
                                <button type="button" onClick={sendValue}>
                                    전송하기
                                </button>
                            </div>
                        </div>
                    )}
                    {tab !== 'CHATROOM' && (
                        <div className="chat-content">
                            <ul className="chat-messages">
                                {[...privateChats.get(tab)].map((chat, index) => (
                                    <li className={`message ${chat.senderName === user.me.name && 'self'}`} key={index}>
                                        {chat.senderName !== user.me.name && <div className="avatar">{chat.senderName}</div>}
                                        <div className="message-data">{chat.message}</div>
                                        {chat.senderName === user.me.name && <div className="avatar self">{chat.senderName}</div>}
                                    </li>
                                ))}
                            </ul>

                            <div className="send-message">
                                <input
                                    type="text"
                                    className="input-message"
                                    placeholder="enter the message"
                                    value={userData.message}
                                    onChange={handleMessage}
                                />
                                <button type="button" className="send-button" onClick={sendPrivateValue}>
                                    send
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="register" ready={registerUser}></div>
            )}
        </div>
    );
};

export default ChatRoom;
