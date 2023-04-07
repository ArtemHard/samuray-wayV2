import { Dispatch } from "redux";
import { authApi, signInObjType } from "../../api/authApi";
import { AuthInitialStateType } from "../reducers/auth-reducer";
import { toggleIsFetching } from "../users-reducer";
import { log } from "console";
import { profileApi } from "../../api/profileApi";

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
      const { id, login, email, isAuth } = data.data;
      dispatch(setAuthUserData({ id, login, email, isAuth }));
    }
    if (data.resultCode === 1) {
      console.warn("NOT AUTHORIZED");
    }
  });
};

export const signInUser = (data: signInObjType) => (dispatch: Dispatch) => {
  authApi.signIn(data).then((data) => {
    const userId = data.data.userId;
    if (data.resultCode === 0 && userId) {
      console.warn("Here need to put data anywere to state");

      // dispatch(setAuthUserData(data.data.userId))
    }
    if (data.resultCode === 1) {
      console.error("Login Error");
    }
  });
};
