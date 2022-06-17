import axios from "axios";
import { customAxios } from "../Http/customAxios";

export const deleteUserApi = async (users, id) => {
  const { status } = await customAxios("delete","/",null);
  if (status !== 201) {
    throw new Error("error");
  }
};

export const getUserList = async(payload) => {
  console.log(payload);
  try{
    const response = await customAxios('get', `/user/${payload}`, null );
    console.log(response.data);
    return response.data;

  }catch(error){
    throw error;
  }

}
