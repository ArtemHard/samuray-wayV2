import { instance } from "./axios";

export const authApi = {
  async authMe() {
    // return instance.get("auth/me").then((response) => response.data);
    return Promise.reject({
      data: {
        resultCode: 1,
      },
    });
  },
};
