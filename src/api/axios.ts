import axios from "axios";
import { BASE_URL } from "../constants/path";

export const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    "API-KEY": "02b871f0-5386-400a-80be-789499b495af",
  },
});
