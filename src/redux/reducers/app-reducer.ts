import { AppActionTypes } from "../actions/appAC";

export interface AppStateType {
  initialized: boolean;
  globalError: string | null;
}

let initialState: AppStateType = {
  initialized: false,
  globalError: null,
};

export const appReducer = (
  state: AppStateType = initialState,
  action: AppActionTypes
): AppStateType => {
  switch (action.type) {
    case "INITIALIZED-SUCCESS":
      return {
        ...state,
        initialized: true,
      };
    case "SET-GLOBAL-ERROR":
      return {
        ...state,
        globalError: action.error,
      };
    default:
      return state;
  }
};
