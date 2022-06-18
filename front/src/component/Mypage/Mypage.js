import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";

import { countReview, deleteUser, logout, selectUserlist } from "../../Store/user";

const Mypage = () => {
  const userDetail = useSelector((state) => state.users
  );
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
   getUserlist();
  
  }, []);


  const getUserlist = async (e) => {
    console.log(userDetail.me.id);
    dispatch(selectUserlist(userDetail.me.id));
    dispatch(countReview());

  };

 

  const onUserDelete = async (e) => {
    console.log("회원탈퇴");
    dispatch(deleteUser());
    
    alert("회원탈퇴되었습니다");
    navigate("/login");
  };
  const onLogout = async (e) => {
    console.log("logout들어옴");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <form className=" flex-auto p-6 ">
        <div className="flex flex-wrap select-none rounded-md  p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-mainYellow hover:shadow-2xl">
          <form class="flex-auto p-6 ">
            <div>
              <img
                class="w-full"
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                alt="Sunset in the mountains"
              ></img>
            </div>

            <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 "></div>

            <div class="flex flex-wrap">
              <h1 class="flex-auto text-lg font-semibold text-slate-900">
                맛집등록수
              </h1>
              <div class="text-lg font-semibold text-slate-500">{userDetail.count.data}</div>
            </div>

            <div class="flex flex-wrap">
              <h1 class="flex-auto text-lg font-semibold text-slate-900">
                userId
              </h1>
              <div class="text-lg font-semibold text-slate-500">{userDetail.me.userId}</div>
            </div>
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-lg font-semibold text-slate-900">
                이름
              </h1>
              <div class="text-lg font-semibold text-slate-500">{userDetail.me.name}</div>
            </div>
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-lg font-semibold text-slate-900">
                폰번호
              </h1>
              <div class="text-lg font-semibold text-slate-500">{userDetail.me.phoneNum}</div>
            </div>

            <div class="flex-auto flex space-x-4">
              <button
                class="h-10 px-6 font-semibold rounded-md bg-mainYellow  text-black"
                onClick={onLogout}
              >
                로그아웃
              </button>
              <button
                class="h-10 px-6 font-semibold rounded-md bg-mainYellow  text-black"
                type="button"
                onClick={onUserDelete}
              >
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
