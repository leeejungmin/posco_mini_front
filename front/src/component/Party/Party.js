import React, { useEffect, useState } from "react";
import DateToday from "./DateToday";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Spinner } from "reactstrap";
import { partyPost } from "../../Store/party"; 

const ShopParty = ({partysPeople,partyState}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [shops,setshop] = useState("");
    const [data, setData] = useState({});
    const [shopId,setshopId] = useState("");
    const [ trBoolean,settrBoolean] = useState(true);

    useEffect(()=>{
      console.log('Here Party............');
    },[])

    const onMovePrev = () => {
        navigate('/list')
    }
    const onClickEvent = () => {
        console.log("Here check shop id........"+shopId);
        dispatch(partyPost(shopId));
    }
    const onChangeE = (e) => {
        const v = e.target.value;
        
        setshopId(v);
        console.log("Here check v id........"+shopId);
        
    }
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
                            <div className="overflow-y-scroll h-80 block w-full overflow-x-auto">
                                <table className=" items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr>
                                            <th className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                숯부레 1
                                            </th>
                                            <th className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                오늘 통닭 2
                                            </th>
                                            <th className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                초선과 여포 3
                                            </th>
                                            <th className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                하나우동 4
                                            </th>
                                            <th className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                한돈애 5
                                            </th>
                                        </tr>
                                    </thead>
 {/*value.shop participate name*/}
                                    <tbody>
                                    {/* {partyState.loading?(
                                       
                                                <Spinner>Loading...</Spinner>
                                                ):(
                                                    partysPeople?.map((value, index) => 
                                                    <th key={index} value={value} className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                         {value.shopid === '1' ? <span className="font-medium"> {value.name} </span> : null}
                                                    </th>
                                            )
                                            )} */}
                                        <tr>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 text-blueGray-700 border border-solid border-blueGray-100">
                                            {setshop.shopid === '1' ? <span className="font-medium">철수</span> : null}
                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                            {setshop.shopid === '2' ? <span className="font-medium">철수</span> : null}
                                            </td>
                                            <td className="border-t-0 px-12 align-center border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                            {setshop.shopid === '3' ? <span className="font-medium">철수</span> : null}
                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                            {setshop.shopid === '4' ? <span className="font-medium">철수</span> : null}
                                            </td>
                                            <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                            {setshop.shopid === '5' ? <span className="font-medium">철수</span> : null}
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
                                                onChangeE(e);
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
                                <div className="flex justify-center">
                            <button 
                                type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className="inline-block px-2.5 py-2 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                onClick={onClickEvent}
                                >참여자 등록
                            </button>
                        </div>
                    </div>

                </div>
            </div>



                </div >
            </div >

            <br></br>
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