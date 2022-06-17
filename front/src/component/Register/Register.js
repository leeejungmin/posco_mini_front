import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { IconName } from "react-icons";
import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Input, Row } from "reactstrap";
import { insertUser, login } from "../../Store/user";



const Register = () => {
    const [isFail, setIsFail] = useState(false);
    const [text, setText] = useState("");
    const [user, setUser] = useState({
        userId: "",
        password: "",
        name: "",
        repassword: "",
        phoneNum: "",
    });
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmitLogin = async (e) => {
        e.preventDefault();
        if (user.userId === "") {
            // id is null
            openAlert("아이디를 입력해주세요");
            return;
        } else if (user.password === "") {
            // password is null
            openAlert("비밀번호를 입력해주세요");
            if (user.password.length < 8)
                openAlert("비밀번호를 8자리 이상 입력해주세요");
            return;
        } else if (user.repassword !== user.password) {
            // password is null
            openAlert("비밀번호가 일치하지 않습니다");
            return;
        } else if (user.name === "") {
            // name is null
            openAlert("이름를 입력해주세요");
            return;
        } else if (user.phoneNum === "") {
            // name is null
            openAlert("휴대폰번호를 입력해주세요");
            return;
        }
        const isInsert = await dispatch(insertUser(user));
        if (isInsert.error) {
            openAlert("이미 존재하는 아이디");
            return;
        }

        await dispatch(login(user));
<<<<<<< Updated upstream
        navigate("/");
=======
        // navigate("/");
>>>>>>> Stashed changes

    };

    const openAlert = (text) => {
        setIsFail(true);
        setText(text);
        setTimeout(() => closeAlert(), 3000);
    };
    const closeAlert = () => {
        setIsFail(false);
        setText("");
    };
    return (


        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">

<<<<<<< Updated upstream
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="font-sans-kr text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">회원가입</p>
                            <Form onSubmit={onSubmitLogin} className="mx-1 mx-md-4">


<div className="max-w-2xl mx-auto bg-white p-16">

	<div>
    <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
            <div for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">아이디</div>
            <input type="text" id="form3Example1c" name="userId" onChange={(e) => onChangeHandler(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="JjangGu" required/>
        </div>
        <div>
           
        </div>
        <div>
            <div for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">이름</div>
            <input type="text" id="form3Example1c" name="name" onChange={(e) => onChangeHandler(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="짱구" required/>
        </div>  
        <div>
            
        </div>
        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">비밀번호</label>
            <input type="password" id="form3Example4c" name="password" onChange={(e) => onChangeHandler(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******" required/>
        </div>
        <div>
            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">비밀번호 확인</label>
            <input  type="password" id="form3Example4cd"name="repassword" onChange={(e) => onChangeHandler(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******" required/>
        </div>
    </div>
    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">휴대전화</label>
        <input type="text" id="form3Example3c" name="phoneNum" onChange={(e) => onChangeHandler(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="010-1234-5678" required/>
    </div> 
    
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <div for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">회원가입을 위한 위 정보 제공에 동의합니다.</div>
    </div>
    <br></br><br></br>
    <div className="flex justify-center">
                                        <button 
=======
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <br></br><br></br><br></br><br></br><br></br>
                        {/* <p className="font-sans-kr text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">회원가입</p> */}
                        <div onSubmit={onSubmitLogin} className="mx-1 mx-md-4">


                            <div className="max-w-2xl mx-auto bg-white p-16">

                                <div>
                                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                                        <div>
                                            <div for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">아이디</div>
                                            <input type="text" id="form3Example1c" name="userId" onChange={(e) => onChangeHandler(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="JjangGu" required />
                                        </div>
                                        <div>

                                        </div>
                                        <div>
                                            <div for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">이름</div>
                                            <input type="text" id="form3Example1c" name="name" onChange={(e) => onChangeHandler(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="짱구" required />
                                        </div>
                                        <div>

                                        </div>
                                        <div>
                                            <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">비밀번호</label>
                                            <input type="password" id="form3Example4c" name="password" onChange={(e) => onChangeHandler(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******" required />
                                        </div>
                                        <div>
                                            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">비밀번호 확인</label>
                                            <input type="password" id="form3Example4cd" name="repassword" onChange={(e) => onChangeHandler(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******" required />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">휴대전화</label>
                                        <input type="text" id="form3Example3c" name="phoneNum" onChange={(e) => onChangeHandler(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="010-1234-5678" required />
                                    </div>

                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                        </div>
                                        <div for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">회원가입을 위한 위 정보 제공에 동의합니다.</div>
                                    </div>
                                    <br></br><br></br>
                                    <div className="flex justify-center">
                                        <button
                                            type={"submit"}
>>>>>>> Stashed changes
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block px-2.5 py-2 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                        >등록하기</button>
                                    </div>
                                </div>


<<<<<<< Updated upstream
</div>
                               

                            </Form>
                         
=======
                            </div>


>>>>>>> Stashed changes
                        </div>

                    </div>

                </div>
            </div>
<<<<<<< Updated upstream
        
=======
        </div>
>>>>>>> Stashed changes



    );
}

export default Register;