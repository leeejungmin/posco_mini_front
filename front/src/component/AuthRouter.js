import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginCheck } from "../Store/user";

const AuthRouter = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        loginCheckFunc();
    }, []);
    const loginCheckFunc = async () => {
        const isLogin = await dispatch(loginCheck()).unwrap();
        isLogin ? toGo() : toGo();
    };
    const toHome = () => {
        const from =
            location.pathname === "/login" || location.pathname === "/register" //
                ? location.pathname
                : "/login";
        navigate(from);
    };
    const toGo = () => {
        const from = location.pathname || "/";
        navigate(from === "/login" || from === "/register" ? "/" : from);
    };
    return <></>;
};

export default AuthRouter;
