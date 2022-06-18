import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { Form } from "reactstrap";
// import { Button, Form, } from "reactstrap";
import { login } from '../../Store/user'
// import "./Login.css";

=======
import { Button, Form,  } from "reactstrap";
import { loginRequestAction } from "../../Sagas/userApi";
import { login, loginCheck } from '../../Store/user'
>>>>>>> ceae509d9943b9f9df0b15e702a8f6e0d474eda1


const Login = () => {

    const dispatch = useDispatch();
    const [isFail, setIsFail] = useState(false);
    const [user, setUser] = useState({
        userId: "",
        password: "",
    });
    const state = useSelector((state) => state.users.isLogin);
    
    useEffect(() => {
        if (state) {
          navigate("/");
        } else {
          setIsFail(true);
          navigate("/login");
          setTimeout(() => closeAlert(), 500);
        //   dispatch(loginCheck());
        }
      }, [state]);

    const onChangeHandler = (e) => {

        const { name, value } = e.target;
        console.log(name, "        ", value);
        setUser({ ...user, [name]: value });
    };
    const navigate = useNavigate();
    const MoveRegi = () => {
        navigate('/register')
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(user));
    };

    const closeAlert = () => {
        setIsFail(false);
    };

    return (
        <>

            <br></br>
            <br></br>
            <div className="bg-gray-400">

                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-12">

                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                            <img
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                                src="/img/back.jpg"
                            >
                            </img>
                            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <br></br><br></br><br></br><br></br>
                                <h3 className="pt-4 text-2xl text font-sans-kr text-center">오늘은 뭐 먹지!?</h3>
                                <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <Form onSubmit={onSubmit}>
<<<<<<< HEAD
                                    <div className="mb-4">
                                        <div className="font-sans-kr block mb-2 text-sm font-bold text-gray-700" >
                                            아이디
=======
                                        <div className="mb-4">
                                            <div className="font-sans-kr block mb-2 text-sm font-bold text-gray-700" >
                                                아이디
                                            </div>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                type="text" placeholder="Username" name="userId" onChange={(e) => onChangeHandler(e)}
                                            />

>>>>>>> ceae509d9943b9f9df0b15e702a8f6e0d474eda1
                                        </div>
                                        <div className="mb-4">
                                            <div className="font-sans-kr block mb-2 text-sm font-bold text-gray-700">
                                                비밀번호
                                            </div>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                type="password" placeholder="비밀번호를 입력해주세요" name="password" onChange={(e) => onChangeHandler(e)}

                                            />
                                            <p></p>
                                            <button
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                                className="inline-block px-2.5 py-2 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                            >로그인</button>

<<<<<<< HEAD
                                        />
                                        
                                    </div>
                                    <div className="mb-4">
                                        <div className="font-sans-kr block mb-2 text-sm font-bold text-gray-700">
                                            비밀번호
                                        </div>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="password" placeholder="비밀번호를 입력해주세요" name="password" onChange={(e) => onChangeHandler(e)}

                                        />
                                        <p></p>
                                        <button 
                                            type="button"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block px-2.5 py-2 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                        >로그인</button>

                                    </div>
=======
                                        </div>
>>>>>>> ceae509d9943b9f9df0b15e702a8f6e0d474eda1
                                    </Form>

                                    <hr className="mb-6 border-t" />
                                    <p></p>
                                    <div className="flex justify-center">

                                        <img className="animate-bounce"
                                            src="/img/pointer.png"></img>
                                    </div>

                                    <div className="flex justify-center">
                                        <button onClick={MoveRegi}
                                            type="button"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block px-2.5 py-2 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                        >회원가입</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br><br></br><br></br><br></br>
                    <div className="flex justify-center"><p>Copyright 2021.같이 먹어요.All Right Reserved.</p></div>
                </div>
            </div>

        </>
    );
};

export default Login;
