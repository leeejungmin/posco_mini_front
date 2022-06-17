
import { customAxiosParty } from "../Http/customAxios";


export const partyPostApi = async (myId,shopId) => {
    //console.log("this is partyPostApi"+  myId + "......"+ shopId);
    const { data } = await customAxiosParty("get", `/shop/review/${shopId}`);
    //return { isLogin: data.isTrue ? true : false, user: data.user, isTrue: data.isTrue };
    console.log("this is sql"+  data + "......");
    return data;
};
