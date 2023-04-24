import { createSelector } from "reselect";
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
export const selectorAuthErrors = (state: reducersType) => {
  return {
    serverError: state.auth.serverError,
  } as const;
};

export const selectorAppInitialized = (state: reducersType) => {
  return {
    initialized: state.app.initialized,
  };
};

// UsersSelectors

export const getSelectorUsers = (state: reducersType) => {
  return state.usersPage.users;
};

export const getSelectorPageSize = (state: reducersType) => {
  return state.usersPage.pageSize;
};
export const getSelectorTotalUsersCount = (state: reducersType) => {
  return state.usersPage.totalUsersCount;
};
export const getSelectorCurrentPage = (state: reducersType) => {
  return state.usersPage.currentPage;
};
export const getSelectorIsFetching = (state: reducersType) => {
  return state.usersPage.isFetching;
};
export const getSelectorFollowingInProgress = (state: reducersType) => {
  return state.usersPage.followingInProgress;
};

export const getUsersSuper = createSelector(
  getSelectorUsers,
  getSelectorIsFetching,
  (users, isFetching) => {
    users.filter((u) => true);
  }
);
