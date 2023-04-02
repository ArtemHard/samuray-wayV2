import { Dispatch } from "redux";
import { profileApi } from "../../api/profileApi";

export type ProfileReducerActionTypes =
  | ReturnType<typeof addPost>
  | ReturnType<typeof updatePosts>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>;

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

const setStatus = (status: string) => {
  return {
    type: "SET-USER-STATUS",
    status,
  } as const;
};

export const getProfile = (userId: string) => (dispatch: Dispatch) => {
  profileApi.getProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
  profileApi.getStatus(userId).then((data) => {
    if (data) dispatch(setStatus(data.data));
  });
};
export const updateStatus = (newStatus: string) => (dispatch: Dispatch) => {
  profileApi.updateStatus(newStatus).then((data) => {
    if (data.resultCode === 0) dispatch(setStatus(data.data));
  });
};
