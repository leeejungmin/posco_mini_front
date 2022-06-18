import { useNavigate } from 'react-router';
import { Spinner } from 'reactstrap';
import { IMG_PATH } from '../../../Http/customAxios';

const Details = ({ details, detailState }) => {
    console.log('details?:', details);
    console.log(detailState);
    const navigate = useNavigate();

    const onMoveReviewReg = (e) => {
        navigate(`/reviewReg`);
    };

    return (
        <>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p className="font-sans-kr text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"> 식당 정보</p>
                            <div className="select-none rounded-md flex flex-1 items-center p-1 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-mainYellow hover:shadow-2xl">
                                <div className="mx-1 mx-md-4">
                                    <div className="font-sans-kr text-1xl font-medium ">
                                        {details.shop.map((v, index) => (
                                            <li className=" flex flex-row mb-2" key={index} name={v}>
                                                <div className="">{v.name}</div>
                                                <br></br>
                                                <div className="w-300 h-100 mb-2 border-gray-400 flex flex-row mb-8">
                                                    <img className="" src={`${IMG_PATH}${v.image}`} alt="myImg"></img>
                                                </div>
                                                <br></br>
                                                위치: {v.location}
                                                <br></br>
                                                평점: {v.grade}
                                            </li>
                                        ))}
                                        <div className="flex justify-content-around my-13">
                                            <button
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                                className="inline-block px-2.5 py-2 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                                onClick={(e) => onMoveReviewReg(e)}
                                            >
                                                리뷰 등록
                                            </button>
                                        </div>
                                        {detailState.loading ? (
                                            <Spinner>Loading...</Spinner>
                                        ) : (
                                            details.review.map((v, index) => (
                                                <li className=" flex flex-row mb-2" key={index} name={v}>
                                                    <div className="select-none rounded-md flex flex-1 items-center p-1 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-1 p-6 mt-3 border-mainYellow hover:shadow-2xl">
                                                        {v.userName}
                                                        <br></br>
                                                        내용: {v.content}
                                                        <br></br>
                                                        점수: {v.rate}
                                                        <br></br>
                                                        {v.photo}
                                                        <div className="w-32 h-28 mb-2 border-gray-400 flex flex-row mb-8">
                                                            <img className="" src={`${IMG_PATH}${v.photo}`} alt="myImg"></img>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
