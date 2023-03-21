import { ProfileReducerActionTypes } from "./actions/profileAC";
import {
  PostType,
  ProfileType,
} from "./types/reducersTypes/profileReducerType";

export type profilePageType = {
  posts: PostType[];
  newPostText: string;
  profile: ProfileType | null;
};
let initialState: profilePageType = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you",
      likesCount: 0,
    },
    {
      id: 2,
      message: "I`ts my first post",
      likesCount: 13,
    },
  ],
  newPostText: "",
  profile: null,
};

export const ProfileReducer = (
  state = initialState,
  action: ProfileReducerActionTypes
): profilePageType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case "UPDATE-NEWPOST": {
      return { ...state, newPostText: action.newText };
    }

    case "SET-USER-PROFILE": {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};
