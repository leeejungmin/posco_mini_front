
import { customAxiosParty } from "../Http/customAxios";


export const partyPostApi = async (payload) => {
    //console.log("this is partyPostApi"+  myId + "......"+ shopId);
    const { data } = await customAxiosParty("post", `/party/create`, payload);
    //return { isLogin: data.isTrue ? true : false, user: data.user, isTrue: data.isTrue };
    console.log("after ....."+  data.partyusers + "......");
    return data;
};

// export const partyGetApi = async () => {
//     //console.log("this is partyPostApi"+  myId + "......"+ shopId);
//     const { data } = await customAxiosParty("get", `/party/`);
//     //return { isLogin: data.isTrue ? true : false, user: data.user, isTrue: data.isTrue };
//     console.log("this is sql"+  data+ "......");
//     return data;
// };