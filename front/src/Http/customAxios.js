import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
export const IMG_PATH = "http://localhost:8000";
export const customAxios = async (method, url, data) => {
    console.log(data);
    const response = await axios({
        method,
        url,
        data,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return response;

};

export const customAxiosCount = async (method, url) => {
    
    const response = await axios({
        method,
        url,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    console.log("............."+response)
    return response;

};


export const customAxiosList = async (method, url, data) => {

    const response = await axios({
        method,
        url,
        data,
    });
    console.log("...........customaxios"+response);
    return response.data;

};

export const customAxiosParty = async (method, url, data) => {

    const response = await axios({
        method,
        url,
        data,
    });
    return response;

};