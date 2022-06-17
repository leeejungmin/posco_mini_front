import { useNavigate } from 'react-router';

const Details = ({ details, detailState }) => {
    const shop = detailState.details.shop[0];
    console.log('shop: ', shop);
    const reviews = detailState.details.review;
    console.log('review: ', reviews);
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
                            <div className="mx-1 mx-md-4">
                                식당 이름: {shop.name}
                                <br></br>
                                식당 이미지: {shop.image}
                                <br></br>
                                <div className="relative">
                                    <button
                                        onClick={onMoveReviewReg}
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="absolute top-12 right-64 h-35 w-40 inline-block px-6 py-2.5 bg-[#FFBC05] hover:bg-[#fcaf0a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        참여하기
                                    </button>
                                </div>
                                <br></br>
                                식당 위치 : {shop.location}
                                <br></br>
                                식당 평점: {shop.grade}
                                <br></br>
                                식당 리뷰: ㅁㄴㅇ;ㅣ라ㅓㄴㅁ이ㅏ;ㄹㅇ넘
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
