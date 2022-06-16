
import { customAxiosParty } from "../Http/customAxios";


export const partyPostApi = async (partyUsers) => {
    console.log("this is partyApi"+partyUsers);
    const { data } = await customAxiosParty("post", "/party/register", partyUsers);
   
    
    //return { isLogin: data.isTrue ? true : false, user: data.user, isTrue: data.isTrue };
    return { partyUsers: data ? data : false, };
};
