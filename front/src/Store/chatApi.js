import { customAxiosList } from '../Http/customAxios';

export const getChatList = async () => {
    try {
        const response = await customAxiosList('get', '/chat/list', null);
        return response;
    } catch (error) {
        throw error;
    }
};
