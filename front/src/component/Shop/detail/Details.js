import { useNavigate } from 'react-router';

const Details = ({ detailState }) => {
    const navigate = useNavigate();

    const onMoveReviewReg = (e) => {
        navigate(`/reviewReg`);
    };

    return (
        <>
            <div className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
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
            </div>
        </>
    );
};

export default Details.js;
