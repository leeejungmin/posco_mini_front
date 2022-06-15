import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form,  } from "reactstrap";
import { loginRequestAction } from "../../Sagas/userApi";
import { login } from '../../Store/user'
import "./Login.css";


    
const Login = () => {

    const dispatch = useDispatch();
    const [isFail, setIsFail] = useState(false);
    const [user, setUser] = useState({
        userId: "",
        password: "",
    });
    const state = useSelector((state) => state.users.isLogin);
    console.log("This is seletor" + state);
    useEffect(() => {
        if (state) {
          navigate("/");
        } else {
          setIsFail(true);
          setTimeout(() => closeAlert(), 3000);
        }
      }, [state]);

    const onChangeHandler = (e) => {
        
        const { name, value } = e.target;
        console.log(name,"        ",value);
        setUser({ ...user, [name]: value });
    };
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginRequestAction(user));
    };

    const closeAlert = () => {
        setIsFail(false);
    };

    return (
        <div className="LoginPage">
            <div className="Box">
                <div className="imgBox">
                    <img src="" alt="Logo"></img>
                </div>
                <Form onSubmit={onSubmit} >
                <div className="LoginBox">
                    <input type="text" placeholder="userId" name="userId" onChange={(e) => onChangeHandler(e)}></input>
                    <input type="password" placeholder="password" name="password" onChange={(e) => onChangeHandler(e)}></input>
                    <Button color="warning">로그인</Button>
                </div>
                </Form>
            </div>
            <div className="Box">
                <p>
                    <a href="/register">가입하기</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
