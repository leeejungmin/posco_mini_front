import { customAxiosList } from '../Http/customAxios';

export const getShopList = async () => {
    try {
        const response = await customAxiosList('get', '/shop/', null);
        //console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};
export const getShopDetail = async (id) => {
    try {
        const response = await customAxiosList('get', `/shop/detail/${id}`, null);
        //console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};
