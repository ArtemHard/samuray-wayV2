import { Dispatch } from "redux";
import { profileApi, profileServerData } from "../../api/profileApi";
import { ProfilePhotos } from "../types/reducersTypes/profileReducerType";
import { StateType } from "../store";
import { AppDispatch, RootState, storeType } from "../redux-store";
import { getUsers } from "../users-reducer";
import { AxiosError, isAxiosError } from "axios";
import { setGlobalError } from "./appAC";

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
  try {
    const response = await profileApi.getProfile(userId);
    dispatch(setUserProfile(response));
  } catch (error: any) {
    if (isAxiosError(error)) {
      const axiosErr = error.response?.data?.error;
      if (typeof axiosErr === "string") {
        dispatch(setGlobalError(axiosErr));
      } else {
        dispatch(error.message);
      }
    }
  }
};

export const getStatus = (userId: string) => async (dispatch: AppDispatch) => {
  const response = await profileApi.getStatus(userId);
  if (response.data) dispatch(setStatus(response.data));
};
export const updateStatus =
  (newStatus: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await profileApi.updateStatus(newStatus);
      if (response.resultCode === 0) dispatch(setStatus(newStatus));
    } catch (error: any) {
      if (isAxiosError(error)) {
        const axiosErr = error.response?.data?.error;
        if (typeof axiosErr === "string") {
          dispatch(setGlobalError(axiosErr));
        } else {
          dispatch(error.message);
        }
      }
    }
  };
export const savePhoto = (file: File) => async (dispatch: AppDispatch) => {
  const response = await profileApi.savePhoto(file);
  if (response.resultCode === 0)
    dispatch(savePhotoSuccess(response.data.photos));
};
export const saveProfile =
  (profileData: profileServerData) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      console.warn(profileData);

      const userId = getState().auth.id?.toString();
      const response = await profileApi.saveProfile(profileData);
      if (response.resultCode === 0 && userId) {
        dispatch(getProfile(userId));
      } else {
        alert("ERROR add good perfomance for this");
      }
    } catch (error: any) {
      if (isAxiosError(error)) {
        const axiosErr = error.response?.data?.fieldsErrors;
        if (Array.isArray(axiosErr) && axiosErr.length) {
          const errors = axiosErr
            .map((el) => {
              if (typeof el === "string") return el;
            })
            .join("; ");
          dispatch(
            setGlobalError(errors.length ? errors : "Some error uccured")
          );
        }
        if (typeof axiosErr === "string") {
          dispatch(setGlobalError(axiosErr));
        } else {
          dispatch(setGlobalError(error.message));
        }
      }
    }
  };
