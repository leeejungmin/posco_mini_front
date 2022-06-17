import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Header=()=>{
    
    const navigate = useNavigate();
    const [isFail, setIsFail] = useState(false);
    const location = useLocation();
    const MoveHome = () => {
        navigate('/login')
    }
    const MoveMypage = () => {
        navigate('/mypage')
    }

    const state = useSelector((state) => state.users.myId);
    console.log(state);
 
    useEffect(() => {
        showMypage();
    }, [state]);

    const showMypage = () => {
        const from = 
        location.pathname === '/login' ? setIsFail(true) : setIsFail(false);
    }

    // if(tmp == "/login"){
    //     setIsFail(true);
    // }else{
    //     setIsFail(false);
    // }
   


    return (
    <>
   
     <div className="2xl:container content-center 2xl:mx-auto">
            <div className="bg-[#FFBC05] dark:bg-gray-800  rounded shadow-lg py-1 px-7">
               
                    <div className="flex items-center text-center place-content-center space-x-3   ">
                        <img className="cursor-pointer dark:bg-white w-20 rounded-full " src="/img/logo.jpg" alt="circle" />                       

                        <h2 className="font-sans-kr text-2xl leading-6 text-gray-800 dark:text-white ">같이 먹어요</h2>
                    </div> 
                    {isFail ?
                    null : (
                    <div>
                        <button onClick={MoveMypage} >
                            마이페이지
                        </button>
                    </div>)
                    }
                    
    
  
                    {/* <ul class="hidden md:flex flex-auto space-x-2">
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Collections</li>
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Arts</li>
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Space</li>
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Game</li>
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Utility</li>
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Cards</li>
                    </ul> */}
                    
               
    
            </div>
        </div>
</>
);
};

export default Header;