
import {Route, Routes} from "react-router";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {IconName} from "react-icons";
import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Input, Row } from "reactstrap";
import {insertUser, login} from "../../Store/user";



const Register = () => {
    const [isFail, setIsFail] = useState(false);
    const [text, setText] = useState("");
    const [user, setUser] = useState({
        userId: "",
        password: "",
        name: "",
        repassword: "",
        Phone_N: "",
    });
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const dispatch = useDispatch();
    //const navigate = useNavigate();
    const onSubmitLogin = async (e) => {
        e.preventDefault();
        if (user.userId === "") {
            // id is null
            openAlert("아이디를 입력해주세요");
            return;
        } else if (user.password === "" ) {
            // password is null
            openAlert("비밀번호를 입력해주세요");
            if (user.password.length < 8)
                openAlert("비밀번호를 8자리 이상 입력해주세요");
            return;
        }else if (user.repassword !== user.password) {
                // password is null
                openAlert("비밀번호가 일치하지 않습니다");
                return;
        } else if (user.name === "") {
            // name is null
            openAlert("이름를 입력해주세요");
            return;
        }else if (user.Phone_N === "") {
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
       // navigate("/");

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
    return(


            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">

                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">회원가입</p>
                            <Form onSubmit={onSubmitLogin} className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">

                                    <div className="form-outline flex-fill mb-0">
                                        <input type="text" id="form3Example1c" className="form-control" name="userId" onChange={(e) => onChangeHandler(e)} />
                                        <label className="form-label"  >아이디</label>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">

                                    <div className="form-outline flex-fill mb-0">
                                        <input type="text" id="form3Example1c" className="form-control" name="name" onChange={(e) => onChangeHandler(e)} />
                                        <label className="form-label"  >이름</label>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">

                                    <div className="form-outline flex-fill mb-0">
                                        <input type="text" id="form3Example3c" className="form-control" name="Phone_N" onChange={(e) => onChangeHandler(e)} />
                                        <label className="form-label"  >휴대전화</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">

                                    <div className="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4c" className="form-control" name="password" onChange={(e) => onChangeHandler(e)}/>
                                        <label className="form-label"  >비밀번호</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">

                                    <div className="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4cd" className="form-control"name="repassword" onChange={(e) => onChangeHandler(e)}/>
                                        <label className="form-label"  >비밀번호</label>
                                    </div>
                                </div>



                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type={"submit"} className="btn btn-primary btn-lg">등록</button>
                                </div>

                            </Form>

                        </div>

                    </div>
                </div>
            </div>



    );
}

export default Register;