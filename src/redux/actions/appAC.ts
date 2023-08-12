import { AppStateType } from "../reducers/app-reducer";
import { AppDispatch } from "../redux-store";
import { getAuthUserData } from "./authAC";

export type AppActionTypes =
  | ReturnType<typeof initializedSuccess>
  | ReturnType<typeof setGlobalError>;

export const initializedSuccess = () => {
  return {
    type: "INITIALIZED-SUCCESS",
  } as const;
};
export const setGlobalError = (error: AppStateType["globalError"]) => {
  return {
    type: "SET-GLOBAL-ERROR",
    error,
  } as const;
};

// export const initializeApp = () => (dispatch: AppDispatch) => {
//   let promise = dispatch(getAuthUserData());
//   Promise.all([promise]).then(() => {
//     dispatch(initializedSuccess());
//   });

export const initializeApp = () => (dispatch: AppDispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });

  //   dispatch(initializedSuccess);
};
