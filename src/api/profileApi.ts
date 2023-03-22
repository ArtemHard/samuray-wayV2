import { instance } from "./axios";

export const profileApi = {
  getProfile(userId?: string) {
    return instance
      .get(`profile/` + generateUserId(userId))
      .then((response) => response.data);
  },
};

const generateUserId = (userId?: string) => (userId ? userId : "2");
