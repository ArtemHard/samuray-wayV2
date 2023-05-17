import { Dispatch } from "redux";
import { authApi, signInObjType } from "../../api/authApi";
import { AuthInitialStateType } from "../reducers/auth-reducer";
import { toggleIsFetching } from "../users-reducer";
import { AppDispatch } from "../redux-store";

export type userAuthActionTypes =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof setErrorAuth>;

export type userDataType = Omit<AuthInitialStateType, "isFetching">;
export const setAuthUserData = (userData: userDataType) => {
  return {
    type: "SET-AUTH-USER-DATA",
    userData,
  } as const;
};

export const setErrorAuth = (errors: string[] | null) => {
  return {
    type: "SET-ERROR",
    errors,
  } as const;
};

export const getAuthUserData = () => async (dispatch: Dispatch) => {
  let response = await authApi.authMe();

  if (response.resultCode === 0) {
    const { id, login, email } = response.data;
    dispatch(
      setAuthUserData({ id, login, email, isAuth: true, serverError: null })
    );
  }
  if (response.resultCode === 1) {
    console.warn("NOT AUTHORIZED");
  }
};

export const signInUser =
  (data: signInObjType) => async (dispatch: AppDispatch) => {
    let response = await authApi.signIn(data);

    const userId = response.data.userId;
    if (response.resultCode === 0 && userId) {
      dispatch(getAuthUserData());
      dispatch(setErrorAuth(null));
    }
    if (response.resultCode === 1) {
      console.error("Login Error>>>" + returnErrorMessages(response.messages));
      dispatch(setErrorAuth(response.messages));
    }
  };
export const logOut = () => async (dispatch: AppDispatch) => {
  let response = await authApi.logOut();

  if (response.resultCode === 0) {
    dispatch(
      setAuthUserData({
        id: null,
        login: null,
        email: null,
        isAuth: false,
        serverError: null,
      })
    );
  }
  if (response.resultCode === 1) {
    console.error("Login Error>>>" + returnErrorMessages(response.messages));
  }
};

const returnErrorMessages = (arr: string[]) => {
  let string = " ";
  arr.forEach((e) => {
    string = string + e + "; ";
  });
  return string;
};
