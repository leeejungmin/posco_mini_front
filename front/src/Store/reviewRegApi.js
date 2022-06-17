import { customAxios } from "../Http/customAxios"

export const insertReviewApi = async(review) => {
    // console.log(reviews);
    console.log(review);
    const {status} = await customAxios("post", "/review/create", review );
    if(status !== 201){
        throw new Error("error");
    }
};