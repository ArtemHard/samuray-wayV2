import { AppDispatch } from "../redux-store";
import { getAuthUserData } from "./authAC";

export type AppActionTypes = ReturnType<typeof initializedSuccess>;

export const initializedSuccess = () => {
  return {
    type: "INITIALIZED-SUCCESS",
  } as const;
};

export const initializeApp = () => (dispatch: AppDispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });

  //   dispatch(initializedSuccess);
};
