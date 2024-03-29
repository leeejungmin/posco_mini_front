import { useEffect, useState } from "react";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import ShopList from "./component/Shop/List/ShopList";
import Party from "./component/Party/Party";
import Mypage from "./component/Mypage/Mypage";
import ReviewReg from "./component/ReviewReg/ReviewReg";
import ShopDetail from "./component/Shop/detail/ShopDetail";
import ChatRoom from "./component/Chat/ChatRoom";
import {Firebase} from "./firebase/firebase";
import Test from "./firebase/test"


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<ShopList></ShopList>}></Route>
                    <Route path="detail/:id" element={<ShopDetail></ShopDetail>}></Route>
                    <Route path="login" element={<Login></Login>}></Route>
                    <Route path="register" element={<Register></Register>}></Route>
                    <Route path="list" element={<ShopList></ShopList>}></Route>
                    <Route path="party" element={<Party></Party>}></Route>
                    <Route path="mypage" element={<Mypage></Mypage>}></Route>
                    <Route path="reviewReg" element={<ReviewReg></ReviewReg>}></Route>
                    <Route path="chat" element={<ChatRoom></ChatRoom>}></Route>
                    <Route path="firebase" element={<Firebase></Firebase>}></Route>
                    <Route path="test" element={<Test></Test>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default App;