import { instance } from "./axios";

export const authApi = {
  async authMe() {
    return instance.get("auth/me").then((response) => response.data);
    // return Promise.reject({
    //   data: {
    //     resultCode: 1,
    //   },
    // });
  },
  async signIn(data: signInObjType) {
    return instance
      .post<SignInResponseType>("auth/login", data)
      .then((response) => response.data);
  },
  async logOut() {
    return instance
      .delete<SignInResponseType>("auth/login")
      .then((response) => response.data);
  },
};

export type signInObjType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
type SignInResponseType = {
  data: userId;
  messages: string[];
  resultCode: number;
};
type userId = { userId?: number };
