import { instance } from "./axios";

export const usersApi = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => response.data);
  },
};
