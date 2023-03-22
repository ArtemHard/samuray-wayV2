import axios from "axios";
import { BASE_URL } from "../constants/path";

export const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    "API-KEY": "0f699f4a-7dea-4f23-b68a-63f069ebd613",
  },
});
