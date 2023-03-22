import { userAuthActionTypes } from "../actions/authAC";

export interface AuthInitialStateType {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
  isFetching: boolean;
}

let initialState: AuthInitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
};

export const authReducer = (
  state: AuthInitialStateType = initialState,
  action: userAuthActionTypes
): AuthInitialStateType => {
  switch (action.type) {
    case "TOGGLE-IS-FETCHING":
      return { ...state, isFetching: action.isFetching };
    case "SET-AUTH-USER-DATA":
      return { ...state, ...action.userData, isAuth: true };
    default:
      return state;
  }
};
