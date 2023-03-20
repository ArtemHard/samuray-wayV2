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
};
let initialState: InitialStateUsersType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 2,
  isFetching: false,
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
          u.id === action.id ? { ...u, followed: false } : u
        ),
      };
      return newState;

    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, followed: true } : u
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
    default:
      return state;
  }
};

type ActionTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof toggleIsFetchingAC>;

export const followAC = (id: number) => {
  return {
    type: "FOLLOW" as const,
    id,
  } as const;
};
export const unFollowAC = (id: number) => {
  return {
    type: "UNFOLLOW" as const,
    id,
  } as const;
};

export const setUsersAC = (users: UsersType[]) => {
  return {
    type: "SET-USERS" as const,
    users,
  } as const;
};

export const setCurrentPageAC = (pageNumber: number) => {
  return {
    type: "SET-CURRENT-PAGE" as const,
    currentPage: pageNumber,
  } as const;
};

export const setTotalUsersCountAC = (totalUsersCount: number) => {
  return {
    type: "SET-TOTAL-USERS-COUNT" as const,
    totalUsersCount,
  } as const;
};

export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {
    type: "TOGGLE-IS-FETCHING",
    isFetching,
  } as const;
};
