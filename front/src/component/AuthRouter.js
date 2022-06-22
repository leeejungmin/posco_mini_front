import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginCheck } from "../Sagas/userApi";

const AuthRouter = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        loginCheckFunc();
    },[]);
    const loginCheckFunc = async () => {
        const tokenc =  localStorage.getItem("token");
        const isLogin = tokenc? true : false;
        //console.log("reducer / logincheck..............."+isLogin);
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
        //navigate(from === "/login" || from === "/register" ? "/" : from);
        navigate(from === "/login" || from === "/register" ? "/" : from);
    };
    return <></>;
};

export default AuthRouter;
