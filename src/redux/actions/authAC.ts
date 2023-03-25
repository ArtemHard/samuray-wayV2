import { Dispatch } from "redux";
import { authApi } from "../../api/authApi";
import { AuthInitialStateType } from "../reducers/auth-reducer";
import { toggleIsFetching } from "../users-reducer";

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
  authApi.authMe().then((data) => {
    console.log("here");

    if (data.resultCode === 0) {
      console.log(data);

      const { id, login, email, isAuth } = data.data;
      dispatch(setAuthUserData({ id, login, email, isAuth }));
    }
    if (data.resultCode === 1) {
      console.warn("NOT AUTHORIZED");
    }
  });
};
