import { AppActionTypes } from "../actions/appAC";

export interface AppStateType {
  initialized: boolean;
}

let initialState: AppStateType = {
  initialized: false,
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
    default:
      return state;
  }
};
