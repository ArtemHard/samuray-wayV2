import { reducersType } from "./redux-store";

export const selectorAuthId = (state: reducersType) => {
  return {
    id: state.auth.id,
  } as const;
};
export const selectorAuthLogin = (state: reducersType) => {
  return {
    login: state.auth.login,
  } as const;
};
export const selectorAuthEmail = (state: reducersType) => {
  return {
    email: state.auth.email,
  } as const;
};
export const selectorAuthisAuth = (state: reducersType) => {
  return {
    isAuth: state.auth.isAuth,
  } as const;
};
export const selectorAuthisFetching = (state: reducersType) => {
  return {
    isFetching: state.auth.isFetching,
  } as const;
};
