import { Spinner } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { IMG_PATH } from '../../../Http/customAxios';

const Shops = ({ shops, shopState }) => {
    //console.log('shops?:', shops);
    const navigate = useNavigate();
    const onMoveNext = () => {
        navigate('/party');
    };
    const onMoveDetail = (valueid, e) => {
        //리스트 하나 누르면 axios로 shop/detail 부르고 페이지 넘어가기

        navigate(`/detail/${valueid}`);
    };


    return (
        <>
            <div className="relative">
                <button onClick={onMoveNext} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="absolute top-32 right-80 h-35 w-40 inline-block px-6 py-2.5 bg-[#FFBC05] hover:bg-[#fcaf0a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">참여하기</button>
			</div>
            <div className="relative h-32 w-32 section pt-20 pb-8 md:pt-16 md:pb-0 bg-white">


                <div className="absolute top-36 left-96 h-16 w-16">
                    <div className="">
                        <div className="grid grid-cols-3 gap-x-96 gap-y-10 max-w-3xl">
                            <div className="col-span-full mb-3">
                                
                            </div>

                            {shopState.loading ? (
                                <Spinner>Loading...</Spinner>
                            ) : (
                                shops?.map((v, index) => (
                                    <li className=" flex flex-row mb-2" key={index} name={v} onClick={(e) => onMoveDetail(v.id, e)}>
                                        <div className="h-40 select-none rounded-md flex flex-1 items-center p-1 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-mainYellow hover:shadow-2xl">
                                            <div className="flex-3 pl-4 mr-4">
                                                <div className="font-sans-kr text-1xl font-medium ">
                                                    이름: {v.name}
                                                    <br></br>
                                                    평점: {v.grade.toFixed(2)}
                                                    {/* <div className="starBox" style={{ width: v.grade }}>
                                                        <img
                                                            className="pointOfStar"
                                                            alt="별"
                                                            src="../..//img/blue.png"
                                                        />
                                                    </div>
                                                    <img
                                                        className="backgrdoundStar"
                                                        alt="별"
                                                        src="/images/회색별들.png"
                                                        /> */}
                                                    <br></br>
                                                    위치:{v.location}
                                                </div>
                                            </div>
                                            <div className="w-72 h-36 mt-3 mb-3 mr-1 border-gray-400 flex flex-row mb-8">
                                                <img className="rounded-2xl" src={`${IMG_PATH}${v.image}`} alt="myImg"></img>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">

<div className="relative">
<button onClick={onMoveNext} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="absolute top-12 right-64 h-35 w-40 inline-block px-6 py-2.5 bg-[#FFBC05] hover:bg-[#fcaf0a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">참여하기</button>
			</div>

                        <div className="absolute top-16 right-60 container mb-2 flex mx-auto w-full items-center justify-center ">
							
							<ul className=" flex flex-col p-4">
							
								{shopState.loading?(
									<Spinner>Loading...</Spinner>
									):(
										
										shops?.map((v , index)=>(
											
											<li className=" flex flex-row mb-2" key={index} name={v}  onClick={(e) => onMoveDetail(v.id, e)}>
												<div
													className="h-40 select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-mainYellow hover:shadow-2xl"
													>
													<div className="flex-1 pl-1 mr-16">
														<div className="font-sans-kr text-1xl font-medium " >
															
															이름: {v.name}
															<br></br>

															평점: {v.grade}
															<br></br>

															위치:{v.location}
															
														</div>
													</div>
													<div className="w-32 h-28 mb-2 border-gray-400 flex flex-row mb-8" >
														<img className="" src={`${IMG_PATH}${v.image}`} alt="myImg">

														</img>
													
											
													</div>
												</div>
											</li>
												
												
												
												))
												)}
								</ul> 
						</div>
			</div>
										 */}
        </>
    );
};

export default Shops;
