
import { customAxios } from "../Http/customAxios";

export const postUser = async (users, user) => {
    //join => register
    const { status } = await customAxios("post", "/user/register", user);
    if (status !== 201) {
        throw new Error("error");
    }
    return 'ok';
    //customAxios => return [...users, newUser];
};

export const loginApi = async (users, user) => {
    const { data } = await customAxios("post", "/user/login", user);

    return { isLogin: data.isTrue ? true : false, user: data.user, isTrue: data.isTrue };
};

export const logoutApi = async (userId) => {
    return true;
};
export const getUserById = async (users, id) => {
    // const findUserById = await users.find((user) => user.id === id);
    const { data } = await customAxios("get", `/user/${id}`);
    return data;
};