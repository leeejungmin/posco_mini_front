import React, { useEffect, useState } from "react";
import DateToday from "./DateToday";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { partyList } from "../../Sagas/party";
import { XYPlot, DonutChart, RadialChart, MarkSeries, LineSeries } from "react-vis";

const ShopParty = () => {
    // console.log(partyState, partys);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [shops, setshop] = useState("");
    const [data, setData] = useState({});
    const [shopId,setshopId] = useState("");
    const [myData, setMyData] = useState([]);
    const [counts,setCounts] = useState(0);
    const [count, setCount] = useState(0);
    ////////////////

    const shopList = [
        { id: 1, label: '숯부레' },
        { id: 2, label: '오늘 통닭' },
        { id: 3, label: '초선과 여포' },
        { id: 4, label: '하나우동' },
        { id: 5, label: '한돈애' },
    ];

    const shopParty = useSelector((state) => state.party.partyUsers.partyusers);
    console.log(shopParty);
    const state = useSelector((state) => state.login.myId);
    const statePartyUser = useSelector((state) => state.party);
    useEffect(() => {
        //    // console.log('Here Party............'+statePartyUser);
        //     const partyData = statePartyUser.map((party, idx) => {
        //         return {...data, name: party.name, shopId: party.shopId}
        //     }
        //     )
        //     console.log('........PartyUserState'+data);
        setMyData(listForm());
        // dispatch(partyList(shopId));
    }, [shopParty]);



    const onMovePrev = () => {
        navigate("/list");
    };
    const onMoveChat = () => {
        navigate("/chat");
    };
    const onClickEvent = () => {
        dispatch(partyList(shopId));
    };
    const onChangeE = (e) => {
        const v = e.target.value;
        setshopId(v);
        console.log("Here check v id........" + shopId);
    };
    // 표에 넣어보기
    const aaa = [
        { name: "한돈애짱구", shopId: 5 },
        { name: "숯부레짱구", shopId: 1 },
        { name: "오늘통닭맹구", shopId: 2 },
        { name: "초선과여포철수", shopId: 3 },
        { name: "하나우동짱구", shopId: 4 },
        { name: "숯부레유리", shopId: 1 },
        { name: "오늘 통닭짱구", shopId: 2 },
        { name: "숯부레유리", shopId: 1 },
    ];
    // const count_aaa = () => {aaa.map((item) => item.shopId ===1? count = count+1
        
    //     )
    // }
    // const count_angle = () => {aaa.filter(item => item.shopId === 1).map(item => {
    //     setCounts(counts => counts +1);
    //     console.log(counts);
    //     return(
    //         <>
    //         <div>{item.name}</div>
    //         <div>{counts}</div>
    //         </>
            
    //     )
        
    // })  }

    const listForm = () => {
        const filterList = shopList.map((data,idx) => {
            const angle = shopParty.filter((pl) => pl.shopId === data.id).length;
            return {...data, angle};
        });
        console.log(filterList);
        return filterList;
    }

    // console.log("count_..........."+count_angle);
    //  const myData = [
    //  { angle: 5, label: '숯부레', opacity: 0.2, style: { fontSize: 10 } },
    //  { angle: 6, label: "오늘 통닭" },
    //  { angle: 6, label: "초선과 여포" },
    //  { angle: 13, label: "ㅤ하나 우동" },
    //  { angle: 0, label: "한돈애" },
    
    //  ]

    //  function arrCount(arrParam, str, property, data) {
        
    //     arrParam.map((item,idx) => {
    //       if (item[property] === idx-1)
    //         count[idx-1]++;
    //         data[0]['angle'] = count;
            
    //     });

       
    //     return count;
    //   }
        
    //   console.log(`count : ${arrCount(aaa, 1, 'shopId')}`);
    //   console.log(`here is check point...... ${myData[0]['label']}`);
      

                return (
                    <>
            <div></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="flex justify-left ">
                <p>
                    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                </p>
                {/* <count_angle></count_angle> */}
                <DateToday />
                <p>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
                <button
                    onClick={onMoveChat}
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-2.5 py-2 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >
                    오픈채팅방 참여하기
                </button>
                <p>ㅤㅤ</p>
                <button
                    onClick={onMovePrev}
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-2.5 py-2 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >
                    뒤로가기
                </button>
            </div>
            <br></br>
            <br></br>
            <div className="2x1:container content-center 2xl:mx-auto">
                <div className="flex justify-center ">
                    <div className="flex justify-between items-center p-9 bg-white rounded-2xl overflow-hidden shadow-lg border-mainYellow border-2">
                        <div>
                            <div className="">
                                <div className="bg-white rounded-md ">
                                    <div>
                                        <h3 className="font-sans-kr text-mainblack text-2x3 text-blueGray-700">
                                            식사 참여자 현황
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="flex justify-left">
                                <RadialChart
                                    className="font-sans-kr text-1xl"
                                    data={myData}
                                    animation
                                    width={500}
                                    height={500}
                                    showLabels={true}
                                ></RadialChart>{" "}
                                <p>ㅤㅤㅤㅤ</p>
                                <div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>

                                    <div className="overflow-y-scroll h-65 block w-full overflow-x-auto">
                                        <table className=" items-center bg-transparent w-full border-collapse ">
                                            <thead>
                                                <tr>
                                                    <th className="px-12 bg-mainblack text-white bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-1 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
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
                                            {/*value.shop participate name*/}
                                            <tbody>
                                                {/* {aaa?.map((v,idx) =>

                                                    v.shopId === 1? (
                                                        setCounts(counts+1)
                                                    <div> {v.shopId} </div>) : null
                                                    )} */}
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
                                                        {shopParty?.map((value, index) =>
                                                            value.shopId === 1 ? (
                                                                <tr>{value.name}</tr>
                                                            ) : null
                                                        )}
                                                    </td>
                                                    {/* {value.shopid === 1 ? <span className="font-medium"> {shopParty?.shopParty?data[1].name} </span> : null} */}
                                                    <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                                        {shopParty?.map((value, index) =>
                                                            value.shopId === 2 ? (
                                                                <tr>{value.name}</tr>
                                                            ) : null
                                                        )}
                                                    </td>
                                                    <td className="border-t-0 px-12 align-center border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                                        {shopParty?.map((value, index) =>
                                                            value.shopId === 3 ? (
                                                                <tr>{value.name}</tr>
                                                            ) : null
                                                        )}
                                                    </td>
                                                    <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                                        {shopParty?.map((value, index) =>
                                                            value.shopId === 4 ? (
                                                                <tr>{value.name}</tr>
                                                            ) : null
                                                        )}
                                                    </td>
                                                    <td className="border-t-0 px-12 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 border border-solid border-blueGray-100">
                                                        {shopParty?.map((value, index) =>
                                                            value.shopId === 5 ? (
                                                                <tr>{value.name}</tr>
                                                            ) : null
                                                        )}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className=" block w-full overflow-x-auto">
                                            <br></br>
                                            <br></br>
                                            <div className="flex justify-center ">
                                                <div className="mb-3 xl:w-96">
                                                    <select
                                                        className="form-select form-select-sm
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
                                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        aria-label=".form-select-sm example"
                                                        onChange={(e) => {
                                                            onChangeE(e);
                                                            const selectedShop = e.target.value;
                                                            console.log({
                                                                date: new Date().toISOString(),
                                                                shopId: e.target.value,
                                                                userId: "d",
                                                            });
                                                            setData({
                                                                date: new Date().toISOString(),
                                                                shopId: e.target.value,
                                                                userId: "",
                                                            });
                                                        }}
                                                        defaultValue={"0"}
                                                    >
                                                        <option value={"0"}>식당 선택하기</option>
                                                        <option value="1">숯부레</option>
                                                        <option value="2">오늘통닥</option>
                                                        <option value="3">초선과 여포</option>
                                                        <option value="4">하나우동</option>
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
                                                >
                                                    참여자 등록
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
        </>
    );
};

export default ShopParty;
