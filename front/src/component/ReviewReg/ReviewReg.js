import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Alert } from "reactstrap";
// import { insertReview } from "../../Store/reviewReg";
import { insertReview } from '../../Sagas/reviewReg';



const ReviewReg = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const[isFail,setIsFail] = useState(false);
    const[isSelectFail, setIsSelectFail] = useState(false);
    const[text, setText] = useState("");

    //***변경할것 ****
    // back 부분 userId -> token으로 변경
    // const {id,location,name} = useSelector((state) => state.details.shopDetail.details.shop[0]);
    const { id } = useSelector((state) => state);
    console.log(id);
    // console.log(name);
    // console.log(location);
    const [reviewReg, setReviewReg] = useState({
        // userId:localStorage.getItem("id"),
        // shopId:id,  // ***변경할것 **** shop state에서 받아주기 shopid값 받아서 그냥 넣어주기만 하면 됏음
        userId: "",
        shopId:"",
        rate:"",
        photo:"",
        content:""
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setReviewReg({...reviewReg, [name] : value});
        // console.log(reviewReg);
    }

    const openAlert = (text) =>{
        setIsFail(true);
        setText(text);
        setTimeout(() => closeAlert(), 3000);
    };

    const closeAlert = () => {
        setIsFail(false);
        setText("");
    };


    const openselAlert = () => {
        setIsSelectFail(true);
        setTimeout(() => closeAlert(), 3000);
    };

    const closeselAlert = () => {
        setIsSelectFail(false);
    };


    
    const onSubmitReview = async (e) => {
        e.preventDefault();
        console.log(reviewReg);
        // console.log(reviewReg.shopName);

        // if (reviewReg.shopName === "") {
        //     // id is null
        //     openAlert("식당을 선택해주세요");
            
        //     return;
        // } else if (reviewReg.location) {
        //         // password is null
        //         openAlert("위치를 입력해주세요");
        //         return;
        // } else if (reviewReg.photo === "") {
        //     // name is null
        //     openAlert("사진을 등록해주세요");
        //     return;
        // }else if (reviewReg.content === "") {
        //     // name is null
        //     openAlert("내용을 입력해주세요");
        //     return;
        // }
        // 보낼때 
        const insertReviews = await dispatch(insertReview(reviewReg));
        // navigate(`/detail/${id}`);

    }

    // ***변경할것 ****받아온값 식당명 shopId는 그냥 보내주고 location도 state에서 받아오기 

    return(
        <>

        <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">

                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="font-sans-kr text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">리뷰등록</p>
                            <div className="mx-1 mx-md-4">


                                <form onSubmit={onSubmitReview}>

                                    {/* 보내줄때 shopId만 빼서 보내주기 */}
                                    <div class="max-w-2xl mx-auto bg-white p-16">

                                        <div>
                                            

                                                <div>
                                                    <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">식당명</label>
                                                {/* <input type="text" id="form3Example4c"  onChange={(e) => onChangeHandler(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={name} readOnly required/> */}
                                                <input type="text" id="form3Example4c" name="userId" onChange={(e) => onChangeHandler(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="userId입력" required />
                                                
                                            </div>
                                            
                                                <div>
                                                    <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">숍아이디</label>
                                                {/* <input type="text" id="form3Example4c"  onChange={(e) => onChangeHandler(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={name} readOnly required/> */}
                                                <input type="text" id="form3Example4c" name="shopId" onChange={(e) => onChangeHandler(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="shopId입력" required />
                                                
                                                </div>

                                                <div>
                                                    <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">위치</label>
                                                {/* <input type="text" id="form3Example4c" name="location" onChange={(e) => onChangeHandler(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={location} readOnly required/> */}
                                                <input type="text" id="form3Example4c" name="location" onChange={(e) => onChangeHandler(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="위치를 등록해주세요" required/>
                                                </div>
                                                    
                                                    <div>
                                                        
                                                    </div>

                                                    <label for="rates" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">평점</label>
                                                    <select id="rates" name="rate" onChange={(e) => onChangeHandler(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option selected>평점을 선택해주세요</option>
                                                        <option value="1">1점</option>
                                                        <option value="2">2점</option>
                                                        <option value="3">3점</option>
                                                        <option value="4">4점</option>
                                                        <option value="5">5점</option>
                                                    </select>
                                                    <div>
                                                    {isSelectFail ? (
                                                                <Alert color="warning" toggle={() => openselAlert()}>
                                                                    ㅇ? 선택해주세요
                                                                </Alert>
                                                            ) : null}
                                                    </div>
                            
                                                    <div>
                                                        
                                                    </div>
                                                
                                                <div>
                                                    <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">사진</label>
                                                    <input  type="text" id="form3Example4cd"name="photo" onChange={(e) => onChangeHandler(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="사진등록" required/>
                                                </div>





                                            <div class="mb-6">
                                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">내용</label>
                                                <input type="text" id="form3Example3c" name="content" onChange={(e) => onChangeHandler(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="리뷰를 작성해주세요" required/>
                                            </div> 
                                        
                                            <br></br><br></br>
                                                                        <div className="flex justify-center">
                                                                            <button 
                                                                                // onClick={onSubmitReview}
                                                                                type={"submit"}
                                                                                data-mdb-ripple="true"
                                                                                data-mdb-ripple-color="light"
                                                                                className="inline-block px-2.5 py-2 bg-[#FFBC05] hover:bg-[#fcaf0a] text-center text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                                                            >등록하기
                                                                            </button>
                                                                        </div>
                                        </div>


                                    </div>
                                    </form>
                               

                            </div>
                         
                        </div>

                    </div>
                </div>
            </div>
        

        </>
    );
}

export default ReviewReg;