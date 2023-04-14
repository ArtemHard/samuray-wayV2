import { Dispatch } from "redux";
import { authApi, signInObjType } from "../../api/authApi";
import { AuthInitialStateType } from "../reducers/auth-reducer";
import { toggleIsFetching } from "../users-reducer";
import { log } from "console";
import { profileApi } from "../../api/profileApi";
import { AppDispatch } from "../redux-store";

export type userAuthActionTypes =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof toggleIsFetching>;

export type userDataType = Omit<AuthInitialStateType, "isFetching">;
export const setAuthUserData = (userData: userDataType) => {
  return {
    type: "SET-AUTH-USER-DATA",
    userData,
  } as const;
};

export const getAuthUserData = () => (dispatch: Dispatch) => {
  authApi.authMe().then((data: any) => {
    if (data.resultCode === 0) {
      const { id, login, email } = data.data;
      dispatch(setAuthUserData({ id, login, email, isAuth: true }));
    }
    if (data.resultCode === 1) {
      console.warn("NOT AUTHORIZED");
    }
  });
};

export const signInUser = (data: signInObjType) => (dispatch: AppDispatch) => {
  authApi.signIn(data).then((data) => {
    const userId = data.data.userId;
    if (data.resultCode === 0 && userId) {
      dispatch(getAuthUserData());
    }
    if (data.resultCode === 1) {
      console.error("Login Error>>>" + returnMessages(data.messages));
    }
  });
};
export const logOut = () => (dispatch: AppDispatch) => {
  authApi.logOut().then((data) => {
    if (data.resultCode === 0) {
      dispatch(
        setAuthUserData({ id: null, login: null, email: null, isAuth: false })
      );
    }
    if (data.resultCode === 1) {
      console.error("Login Error>>>" + returnMessages(data.messages));
    }
  });
};

const returnMessages = (arr: string[]) => {
  let string = " ";
  arr.forEach((e) => {
    string = string + e + " ";
  });
  return string;
};
