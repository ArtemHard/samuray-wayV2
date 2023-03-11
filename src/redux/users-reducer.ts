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
};
let initialState: InitialStateUsersType = {
  users: [
    // {
    //   id: 1,
    //   followed: false,
    //   photoUrl:
    //     "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
    //   name: "Dmitry",
    //   status: 'I"am a sensey',
    //   location: { city: "Minsk", country: "Belarus" },
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   photoUrl:
    //     "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
    //   name: "Dmitry",
    //   status: 'I"am a sensey',
    //   location: { city: "Moscow", country: "Russia" },
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   photoUrl:
    //     "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
    //   name: "Dmitry",
    //   status: 'I"am a sensey',
    //   location: { city: "Kiev", country: "Ukraine" },
    // },
  ],
  pageSize: 5,
  totalUsersCount: 0,
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
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

type ActionTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>
  | ReturnType<typeof setUsersAC>;

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
