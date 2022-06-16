
import { customAxios } from "../Http/customAxios";

export const postUser = async (users, user) => {
    //join => register
    const { status } = await customAxios("post", "/user/create", user);
    if (status !== 201) {
        throw new Error("error");
    }
    //console.log(status.data);
    //return [...users, status.data];
    //customAxios => return [...users, newUser];
};

export const loginApi = async (users, user) => {
    console.log("this is loginApi"+user);
    const { data } = await customAxios("post", "/user/login", user);
    localStorage.setItem("token", data.token);
    console.log("this is loginAPI token" + data.token);
    //return { isLogin: data.isTrue ? true : false, user: data.user, isTrue: data.isTrue };
    return { isLogin: data.token ? true : false, user: data.user, token: data.token };
};

export const logoutApi = async (userId) => {
    return true;
};
export const getUserById = async (users, id) => {
    // const findUserById = await users.find((user) => user.id === id);
    const { data } = await customAxios("get", `/user/${id}`);
    return data;
};

