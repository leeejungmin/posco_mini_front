import { customAxiosList } from '../Http/customAxios';

export const getShopList = async () => {
    try {
        const response = await customAxiosList('get', '/shop/rate', null);
        //console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};
export const getShopDetail = async (shopId) => {
    try {
        const response = await customAxiosList('get', `/shop/detail/${shopId}`, null);

        return response;
    } catch (error) {
        throw error;
    }
};
