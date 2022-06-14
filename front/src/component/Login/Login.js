import { Button } from "reactstrap";
import "./Login.css";

const Login = () => {
    return (
        <div className="LoginPage">
            <div className="Box">
                <div className="imgBox">
                    <img src="" alt="Logo"></img>
                </div>
                <div className="LoginBox">
                    <input type="text" placeholder="Id"></input>
                    <input type="password" placeholder="Password"></input>
                    <Button color="warning">로그인</Button>
                </div>
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
