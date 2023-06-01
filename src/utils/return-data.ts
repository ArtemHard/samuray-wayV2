import { AxiosPromise, AxiosResponse } from "axios";

export const returnData = (promise: AxiosPromise) => {
  return promise.then((response: AxiosResponse) => {
    if (response?.data) {
      return response.data;
    } else return response;
  });
};
