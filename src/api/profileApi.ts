import axios from "axios";
import { BASE_URL } from "../constants/path";

export const profileApi = {
  getProfile(userId?: string) {
    return axios
      .get(BASE_URL + `profile/` + generateUserId(userId))
      .then((response) => response.data);
  },
};

const generateUserId = (userId?: string) => (userId ? userId : "2");
