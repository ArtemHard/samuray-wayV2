import { Dispatch } from "redux";
import { profileApi } from "../../api/profileApi";
import { ProfilePhotos } from "../types/reducersTypes/profileReducerType";

export type ProfileReducerActionTypes =
  | ReturnType<typeof addPost>
  | ReturnType<typeof updatePosts>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof savePhotoSuccess>;

export const addPost = (newPostText: string) => {
  return {
    type: "ADD-POST",
    newPostText,
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

export const setStatus = (status: string) => {
  return {
    type: "SET-USER-STATUS",
    status,
  } as const;
};
export const savePhotoSuccess = (photos: ProfilePhotos) => {
  return {
    type: "SAVE-PHOTO-SUCCESS",
    photos,
  } as const;
};

export const getProfile = (userId: string) => async (dispatch: Dispatch) => {
  const response = await profileApi.getProfile(userId);
  dispatch(setUserProfile(response));
};

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
  const response = await profileApi.getStatus(userId);
  if (response.data) dispatch(setStatus(response.data));
};
export const updateStatus =
  (newStatus: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.updateStatus(newStatus);
    if (response.resultCode === 0) dispatch(setStatus(newStatus));
  };
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
  const response = await profileApi.savePhoto(file);
  if (response.resultCode === 0)
    dispatch(savePhotoSuccess(response.data.photos));
};
