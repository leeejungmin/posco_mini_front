
import { customAxios } from "../Http/customAxios";


export const getShopList = async () =>{
    try{
        const response = await customAxios("get","/shop/",null);
        //console.log(response);
        return response;
    } catch(error){
        throw error;
    }

};
export const getShopDetail = async () =>{
    try{
        const response = await customAxios("get","/shop/detail",null);
        //console.log(response);
        return response;
    } catch(error){
        throw error;
    }

};
