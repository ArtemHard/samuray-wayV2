import { Dispatch } from "redux";
import { profileApi } from "../../api/profileApi";

export type ProfileReducerActionTypes =
  | ReturnType<typeof addPost>
  | ReturnType<typeof updatePosts>
  | ReturnType<typeof setUserProfile>;

export const addPost = () => {
  return {
    type: "ADD-POST",
  } as const;
};
export const updatePosts = (text: string) => {
  return {
    type: "UPDATE-NEWPOST",
    newText: text,
  } as const;
};
export const setUserProfile = (profile: any) => {
  return {
    type: "SET-USER-PROFILE",
    profile,
  } as const;
};

export const getProfile = (userId: string) => (dispatch: Dispatch) => {
  profileApi.getProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};
