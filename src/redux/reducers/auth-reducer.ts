import { userAuthActionTypes } from "../actions/authAC";

export interface AuthInitialStateType {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
  isFetching: boolean;
  serverError: string[] | null;
}

let initialState: AuthInitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
  serverError: null,
};

export const authReducer = (
  state: AuthInitialStateType = initialState,
  action: userAuthActionTypes
): AuthInitialStateType => {
  switch (action.type) {
    case "TOGGLE-IS-FETCHING":
      return { ...state, isFetching: action.isFetching };
    case "SET-AUTH-USER-DATA":
      return { ...state, ...action.userData, isAuth: action.userData.isAuth };
    case "SET-ERROR":
      return { ...state, serverError: action.errors };
    default:
      return state;
  }
};
