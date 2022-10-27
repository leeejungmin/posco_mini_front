import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { cntReview } from '../../Sagas/myPage';

import {  deleteUser, logout, getUserById } from '../../Sagas/user';

const Mypage = () => {
    const userDetail = useSelector((state) => state.login);

    // const cntReview = useSelector((state)=> state.count);

    const navigate = useNavigate();
    const dispatch = useDispatch();

   useEffect( () => {
       dispatch(cntReview());
   },[userDetail]);   

    
    const onUserDelete = async (e) => {
        console.log('회원탈퇴');
        dispatch(deleteUser());

        alert('회원탈퇴되었습니다');
        navigate('/login');
    };
    const onLogout = async (e) => {
        console.log('logout들어옴');
        dispatch(logout());
        
        navigate('/login');
    };

    return (
        <>
            <form className=" 2xl:container content-center 2xl:mx-auto ">
                <div className=" flex-wrap select-none rounded-md  p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-mainYellow hover:shadow-2xl">
                    <form className="flex-auto p-6 ">
                        <div className="">
                            <img
                                className="w-full 
                object-cover object-center "
                                src="/img/logo.jpg"
                                alt="Sunset in the mountains"
                            ></img>
                        </div>

                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 "></div>

                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-lg font-semibold text-slate-900">맛집등록수</h1>
                            <div className="text-lg font-semibold text-slate-500">{}</div>
                        </div>

                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-lg font-semibold text-slate-900">userId</h1>
                            <div className="text-lg font-semibold text-slate-500">{userDetail.me.userId}</div>
                        </div>
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-lg font-semibold text-slate-900">이름</h1>
                            <div className="text-lg font-semibold text-slate-500">{userDetail.me.name}</div>
                        </div>
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-lg font-semibold text-slate-900">폰번호</h1>
                            <div className="text-lg font-semibold text-slate-500">{userDetail.me.phoneNum}</div>
                        </div>

                        <div className="flex-auto flex space-x-4">
                            <button className="h-10 px-6 font-semibold rounded-md bg-mainYellow  text-black" onClick={()=>onLogout}>
                                로그아웃
                            </button>
                            <button className="h-10 px-6 font-semibold rounded-md bg-mainYellow  text-black" onClick={()=>onUserDelete}>
                                회원탈퇴
                            </button>
                        </div>
                    </form>
                </div>
            </form>
        </>
    );
};

export default Mypage;
