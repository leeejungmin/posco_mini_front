
import React, { useState } from "react";
import DateToday from "./DateToday";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ShopParty = () => {

    const navigate = useNavigate();
    const [shopState, setShopState, shop, setShop] = useState("");
    const onMovePrev =() =>{
        navigate('/list')
    }
    const dispatch = useDispatch();

    // shopid db에 넣기
    const onChangeHandler = async(e) => {
        const { name, value } = e.target;
        setShop({ ...shop, [name]: value });

        await dispatch(push(shop));
    };

   
            
    
    return (
        <>

            <div></div>
            <br></br>
            <br></br>


            <div className="flex justify-center ">
                <DateToday />

            </div>
            <div className="2xl:container content-center 2xl:mx-auto">

                <div className="flex justify-center ">

                    <br></br>
                    <br></br>
                    {/* 테이블시작 */}
                    {/* 테이블인걸까 */}


                    <div className="flex justify-between items-center p-4 bg-white">

                        <div>
                            <div className="p-4">
                                <div className="bg-white p-4 rounded-md">
                                    <div>
                                        <p>
                                            <span className="mb-4 text-xl font-sans-kr text-gray-700">식사 참여자 현황</span>
                                        </p>
                                        <div>

                                            <div>
                                                <div className="flex justify-between bg-gradient-to-tr font-sans-kr from-amber-500 font-mediumto-amber-300 rounded-md py-2 px-4 text-stone-700 font-bold text-md">
                                                    <div>
                                                        <span>숯불애　　　　</span>
                                                    </div>
                                                    <div>
                                                        <span>오늘통닭　　　　</span>
                                                    </div>
                                                    <div>
                                                        <span>초선과 여포　　　　</span>
                                                    </div>
                                                    <div>
                                                        <span>하나우동　　　　</span>
                                                    </div>
                                                    <div>
                                                        <span>한돈애</span>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex justify-between border-t text-sm font-medium mt-4 space-x-4">
                                                        <div className="px-2 flex font-medium">
                                                            {shopState === '2' ? <span className="font-medium">철수</span> : null}
                                                            {/* <span>철수</span> */}
                                                        </div>
                                                        <div>
                                                            <span>훈이</span>
                                                        </div>
                                                        <div className="px-4">
                                                            <span>유리</span>
                                                        </div>
                                                        <div className="px-4">
                                                            <span></span>
                                                        </div>
                                                        <div className="px-4">
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                                                        <div className="px-2">
                                                            <span>맹구</span>
                                                        </div>
                                                        <div>
                                                            <span></span>
                                                        </div>
                                                        <div className="px-2">
                                                            <span></span>
                                                        </div>
                                                        <div className="px-2">
                                                            <span></span>
                                                        </div>
                                                        <div className="px-2">
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                                                        <div className="px-2">
                                                            <span></span>
                                                        </div>
                                                        <div>
                                                            <span></span>
                                                        </div>
                                                        <div className="px-2">
                                                            <span></span>
                                                        </div>
                                                        <div className="px-2">
                                                            <span></span>
                                                        </div>
                                                        <div className="px-2">

                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                    {/* 테이블인걸까 */}

                </div>
            </div>


            {/* 콤보박스 */}
            <div className="flex justify-center ">

                <div className="mb-3 xl:w-96">
                    <select className="form-select form-select-sm
    appearance-none
    block
    w-full
    px-5
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example"
                        onChange={(e) => {
                            const selectedShop = e.target.value;
                            setShopState(selectedShop);
                        }}
                        defaultValue={"0"}
                    >
                        <option value={"0"}>식당 선택하기</option>
                        <option value="2">숯부레</option>
                        <option value="1">오늘통닭</option>
                        <option value="4">초선과 여포</option>
                        <option value="3">하나우동</option>
                        <option value="5">한돈애</option>
                    </select> 

                </div>

                {/* 콤보박스 끝 */}

                <p>　　　</p>

                {/* 버튼 시작 */}
                {/* <button 
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-4 py-1 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >참여</button>  */}
                {/* 버튼 끝 */}

                {/* 토글버튼 시작 */}
                {/* <div class="flex justify-center">
                    <div class="form-check form-switch">
                        <input onChange={
                        (e)=>{
                            console.log(e.target.value);
                        }
                    } class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top  bg-no-repeat bg-contain before:bg-blue-500 after:bg-[#FFBC05] focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>

                    </div>
                </div> */}
                {/* 토글버튼 끝 */}
                <span hidden value={shopState} name="shopId"onChange={(e) => {onChangeHandler(e)                          
                        }}></span>
            </div>
            
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* 리스트 박스 끝 */}

            <div className="flex justify-center">
                <button onClick={onMovePrev}
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-2.5 py-1 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >뒤로가기</button>
            </div>

        </>

    );
}

export default ShopParty;


{/* <div className="overflow-y-scroll w-40 items-center text-center place-content-center space-x-3">
여기는 숯불애
</div> */}