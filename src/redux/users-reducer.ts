import axios from "axios";
import { Dispatch } from "redux";
import { usersApi } from "../api/usersApi";

type LocationType = {
  city: string;
  country: string;
};
export type UsersType = {
  id: number;
  followed: boolean;
  photos: {
    small: string;
    large: string;
  };
  name: string;
  status: string;
  location: LocationType;
};
export type InitialStateUsersType = {
  users: Array<UsersType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};
let initialState: InitialStateUsersType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 2,
  isFetching: false,
  followingInProgress: [],
};

export const usersReducer = (
  state: InitialStateUsersType = initialState,
  action: ActionTypes
): InitialStateUsersType => {
  switch (action.type) {
    case "FOLLOW":
      const newState = {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, followed: true } : u
        ),
      };
      return newState;

    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, followed: false } : u
        ),
      };

    case "SET-USERS":
      return { ...state, users: [...action.users] };

    case "SET-CURRENT-PAGE":
      return { ...state, currentPage: action.currentPage };

    case "SET-TOTAL-USERS-COUNT":
      return { ...state, totalUsersCount: action.totalUsersCount };
    case "TOGGLE-IS-FETCHING":
      return { ...state, isFetching: action.isFetching };
    case "TOGGLE-IS-FOLLOWING-PROGRESS":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((v) => v !== action.userId),
      };
    default:
      return state;
  }
};

export type ActionTypes =
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unFollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleIsFollowingProgress>;

export const followSuccess = (id: number) => {
  return {
    type: "FOLLOW" as const,
    id,
  } as const;
};
export const unFollowSuccess = (id: number) => {
  return {
    type: "UNFOLLOW" as const,
    id,
  } as const;
};

export const setUsers = (users: UsersType[]) => {
  return {
    type: "SET-USERS" as const,
    users,
  } as const;
};

export const setCurrentPage = (pageNumber: number) => {
  return {
    type: "SET-CURRENT-PAGE" as const,
    currentPage: pageNumber,
  } as const;
};

export const setTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: "SET-TOTAL-USERS-COUNT" as const,
    totalUsersCount,
  } as const;
};

export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: "TOGGLE-IS-FETCHING",
    isFetching,
  } as const;
};
export const toggleIsFollowingProgress = (
  isFetching: boolean,
  userId: number
) => {
  return {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching,
    userId,
  } as const;
};

export const getUsers =
  (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(toggleIsFetching(false));
      if (typeof data.totalCount === "number")
        dispatch(setTotalUsersCount(data.totalCount));
    });
  };
export const follow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  usersApi.unFollowUser(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unFollowSuccess(userId));
      dispatch(toggleIsFollowingProgress(false, userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
  });
};
export const unFollow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  usersApi.followUser(userId).then((data) => {
    console.log(data);
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
      dispatch(toggleIsFollowingProgress(false, userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
  });
};
