import React, { useEffect, useState } from "react";
import DateToday from "./DateToday";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios';

const ShopParty = () => {

    const navigate = useNavigate();
    const [shopState, setShopState, shop, setShop] = useState("");
    const [data, setData] = useState({});
    const onMovePrev = () => {
        navigate('/list')
    }

    // axios로 데이터 보내기
    useEffect(()=>{
        axios.post('./add', data)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    },[data])

    // const dispatch = useDispatch();

    // 1. 현재 시간을 넣어보자
    // const [timer, setTimer]=useState("00:00:00");
    // const currentTimer=()=>{
    //     //const year = 2022;
    //     const date = new Date();
    //     const hours=String(date.getHours()).padStart(2,"0");
    //     const minutes=String(date.getminutes()).padStart(2,"0");
    //     const seconds=String(date.getseconds()).padStart(2,"0");
    //     setTimer(`${hours}:${minutes}:${seconds}`)
    // }
    // const startTimer=()=>{setInterval(currentTimer, 1000)}
    // startTimer()

    // 2. party 데이터(id, userid, shopid, date)를 넘겨보자


    // const [partys, setPartys] = useState([]);

    // useEffect(()=>{
    //     axios({
    //         method: 'POST',
    //         url: ''
    //     }).then(Response => setPartys(response.data)) // 데이터 불러오기
    // })

    // shopid db에 넣기
    // const onChangeHandler = async(e) => {
    //     const { name, value } = e.target;
    //     setShop({ ...shop, [name]: value });

    // };
    
    // useEffect(()=>{
    //     axios.post('/전송할 주소')

    // })



    return (
        <>

            <div></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <div className="flex justify-center ">
                <DateToday />

            </div>
            <br></br>
            <br></br>
            <div className="2xl:container content-center 2xl:mx-auto">

                <div className="flex justify-center ">

                    <div className="flex justify-between items-center p-4 bg-white rounded-2xl overflow-hidden shadow-lg border-mainYellow border-2">

                        <div>
                            <div className="p-4 ">
                                <div className="bg-white p-4 rounded-md ">
                                    <div>
                                        <h3 className="font-sans-kr text-mainblack text-2x3 text-blueGray-700">식사 참여자 현황</h3>
                                    </div>

                                </div>
                            </div>

                            <div className="overflow-y-scroll h-60 block w-full overflow-x-auto">
                           
                                <table className=" items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr>
                                            <th className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                숯부레
                                            </th>
                                            <th className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                오늘 통닭
                                            </th>
                                            <th className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                초선과 여포
                                            </th>
                                            <th className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                하나우동
                                            </th>
                                            <th className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                한돈애
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 text-blueGray-700 border border-solid border-blueGray-100">
                                                {shopState === '2' ? <span className="font-medium">철수</span> : null}
                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                            {shopState === '1' ? <span className="font-medium">철수</span> : null}
                                            </td>
                                            <td className="border-t-0 px-12 align-center border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                            {shopState === '4' ? <span className="font-medium">철수</span> : null}
                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                            {shopState === '3' ? <span className="font-medium">철수</span> : null}
                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                            {shopState === '5' ? <span className="font-medium">철수</span> : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm  whitespace-nowrap p-4 text-center text-blueGray-700 border border-solid border-blueGray-100">
                                                훈이
                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-center p-4 border border-solid border-blueGray-100">

                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-center p-4 border border-solid border-blueGray-100">

                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-center  p-4 border border-solid border-blueGray-100">

                                                맹구
                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-center text-sm whitespace-nowrap p-4 text-blueGray-700 border border-solid border-blueGray-100">

                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-center text-sm whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                                유리
                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-center text-sm whitespace-nowrap p-4 border border-solid border-blueGray-100">

                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-center text-sm whitespace-nowrap p-4 border border-solid border-blueGray-100">


                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-center text-sm whitespace-nowrap p-4 border border-solid border-blueGray-100">


                                            </td>
                                        </tr>


                                    </tbody>

                                </table>

                            </div>
                            <div className=" block w-full overflow-x-auto">
                                <br></br>
                                <br></br>
                                < div className="flex justify-center " >
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
                                                console.log({
                                                    date:new Date().toISOString(),
                                                    shopId: e.target.value,
                                                    userId:'d',
                                                })
                                                setData({date:new Date().toISOString(),
                                                    shopId: e.target.value,
                                                    userId:''})
                                                
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


                                </div>
                            </div>

                        </div>
                    </div>



                </div >
            </div >

            <br></br>
            {/* 콤보박스 */}
            < div className="flex justify-center " >



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
                {/* <span hidden value={shopState} name="shopId"onChange={(e) => {onChangeHandler(e)                          
                        }}></span> */}
            </div >

            <br></br>




            {/* 리스트 박스 끝 */}

            <div className="flex justify-center">
                <button onClick={onMovePrev}
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-2.5 py-2 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >뒤로가기</button>
            </div>
        </>

    );
}

export default ShopParty;


{/* <div className="overflow-y-scroll w-40 items-center text-center place-content-center space-x-3">
여기는 숯불애
</div> */}