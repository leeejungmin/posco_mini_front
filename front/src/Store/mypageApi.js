import axios from "axios";
import { customAxios } from "../Http/customAxios";

export const deleteUserApi = async (users, id) => {
  const { status } = await customAxios("/", "delete");
  if (status !== 201) {
    throw new Error("error");
  }
};
