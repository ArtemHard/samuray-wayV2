import { instance } from "./axios";

export const securityApi = {
  getCaptchaUrl() {
    return instance
      .get<CaptchaUrlResponse>("security/get-captcha-url")
      .then((res) => res.data);
  },
};

type CaptchaUrlResponse = {
  url: string;
};
