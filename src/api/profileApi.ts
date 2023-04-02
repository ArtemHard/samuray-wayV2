import { instance } from "./axios";
export const profileApi = {
  getProfile(userId?: string) {
    return instance
      .get(`profile/` + generateUserId(userId))
      .then((response) => response.data);
  },
  getStatus(userId: string) {
    return instance
      .get("profile/status/" + generateUserId(userId))
      .then((response) => {
        return response.data;
      });
  },
  updateStatus(status: string) {
    return instance
      .put("profile/status/", {
        status,
      })
      .then((response) => response.data);
  },
};

const generateUserId = (userId?: string) => (userId ? userId : "28053");
