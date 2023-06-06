import { Dispatch } from "redux";
import { profileApi, profileServerData } from "../../api/profileApi";
import { ProfilePhotos } from "../types/reducersTypes/profileReducerType";
import { StateType } from "../store";
import { AppDispatch, RootState, storeType } from "../redux-store";
import { getUsers } from "../users-reducer";

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

export const getProfile = (userId: string) => async (dispatch: AppDispatch) => {
  const response = await profileApi.getProfile(userId);
  dispatch(setUserProfile(response));
};

export const getStatus = (userId: string) => async (dispatch: AppDispatch) => {
  const response = await profileApi.getStatus(userId);
  if (response.data) dispatch(setStatus(response.data));
};
export const updateStatus =
  (newStatus: string) => async (dispatch: AppDispatch) => {
    const response = await profileApi.updateStatus(newStatus);
    if (response.resultCode === 0) dispatch(setStatus(newStatus));
  };
export const savePhoto = (file: File) => async (dispatch: AppDispatch) => {
  const response = await profileApi.savePhoto(file);
  if (response.resultCode === 0)
    dispatch(savePhotoSuccess(response.data.photos));
};
export const saveProfile =
  (profileData: profileServerData) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const userId = getState().auth.id?.toString();
    const response = await profileApi.saveProfile(profileData);
    if (response.resultCode === 0 && userId) {
      dispatch(getProfile(userId));
    }
  };
