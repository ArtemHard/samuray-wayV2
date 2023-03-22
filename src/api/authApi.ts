import { instance } from "./axios";

export const authApi = {
  authMe() {
    return instance.get("auth/me").then((response) => response.data);
  },
};
