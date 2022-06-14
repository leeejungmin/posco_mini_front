import { Outlet } from "react-router-dom";
import AuthRouter from "../AuthRouter";
import Header from "./Header";

const Layout = () => {
    return (
        <>
        <Header></Header>
        <div>
            <AuthRouter></AuthRouter>

            <Outlet />

           
        </div>
        </>
    );
};

export default Layout;
