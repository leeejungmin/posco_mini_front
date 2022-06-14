import { useState } from 'react';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import ShopList from './component/Shop/ShopList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<ShopList></ShopList>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="list" element={<ShopList></ShopList>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;

//initial commit test by amoschayh
//윤형이가 커밋한 내용입니다. 머지 바랍니다.
