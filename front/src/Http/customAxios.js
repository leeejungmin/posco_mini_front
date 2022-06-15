import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
export const customAxios = async (method, url, data) => {
    const response =  await axios({
        method,
        url,
        data,
    });
    return response.data;
};