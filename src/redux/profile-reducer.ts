import { profile } from "console";
import { ProfileReducerActionTypes } from "./actions/profileAC";
import {
  PostType,
  ProfileType,
} from "./types/reducersTypes/profileReducerType";

export type profilePageType = {
  posts: PostType[];
  newPostText: string;
  profile: ProfileType | null;
  status: string;
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
  status: "",
};

export const ProfileReducer = (
  state = initialState,
  action: ProfileReducerActionTypes
): profilePageType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: Date.now(),
        message: action.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: "",
      };

    case "UPDATE-NEWPOST": {
      return { ...state, newPostText: action.newText };
    }

    case "SET-USER-PROFILE": {
      return { ...state, profile: action.profile };
    }
    case "SET-USER-STATUS": {
      return { ...state, status: action.status };
    }
    case "SAVE-PHOTO-SUCCESS": {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    default:
      return state;
  }
};
