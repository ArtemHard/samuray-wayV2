import axios from "axios";
import { Dispatch } from "redux";
import { usersApi } from "../api/usersApi";
import { updateOblectInArray } from "../utils/object-helper";

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
      console.log("follow");

      const newState = {
        ...state,
        users: updateOblectInArray(state.users, action.id, "id", {
          followed: true,
        }),
        // users: state.users.map((u) =>
        //   u.id === action.id ? { ...u, followed: true } : u
        // ),
      };
      return newState;

    case "UNFOLLOW":
      console.log("unfollow");

      return {
        ...state,
        users: updateOblectInArray(state.users, action.id, "id", {
          followed: false,
        }),
        // users: state.users.map((u) =>
        //   u.id === action.id ? { ...u, followed: false } : u
        // ),
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
  (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    const response = await usersApi.getUsers(currentPage, pageSize);
    dispatch(setUsers(response.items));
    dispatch(toggleIsFetching(false));
    if (typeof response.totalCount === "number")
      dispatch(setTotalUsersCount(response.totalCount));
  };

const followUnfollowFlow = async (
  dispatch: Dispatch,
  userId: number,
  apiMethod: (userId: number) => Promise<any>,
  actionCreator: (id: number) => {
    readonly type: "UNFOLLOW" | "FOLLOW";
    readonly id: number;
  }
) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(toggleIsFollowingProgress(false, userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const follow = (userId: number) => async (dispatch: Dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersApi.unFollowUser.bind(usersApi),
    unFollowSuccess
  );
  // dispatch(toggleIsFollowingProgress(true, userId));
  // const response = await apiMethod(userId);
  // if (response.resultCode === 0) {
  //   dispatch(actionCreator(userId));
  //   dispatch(toggleIsFollowingProgress(false, userId));
  // }
  // dispatch(toggleIsFollowingProgress(false, userId));
};
export const unFollow = (userId: number) => async (dispatch: Dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  followUnfollowFlow(
    dispatch,
    userId,
    usersApi.followUser.bind(usersApi),
    followSuccess
  );
  // const response = await apiMethod(userId);
  // if (response.resultCode === 0) {
  //   dispatch(actionCreator(userId));
  //   dispatch(toggleIsFollowingProgress(false, userId));
  // }
  // dispatch(toggleIsFollowingProgress(false, userId));
};
