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
export const getShopDetail = async (shopId) => {
    try {
        const response = await customAxiosList('get', `/shop/detail/${shopId}`, null);
        //console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};
