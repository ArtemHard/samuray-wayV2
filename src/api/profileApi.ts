import {
  ProfileContacts,
  ProfilePhotos,
  ProfileType,
} from "../redux/types/reducersTypes/profileReducerType";
import { returnData } from "../utils/return-data";
import { instance } from "./axios";
export const profileApi = {
  getProfile(userId?: string) {
    return instance
      .get(`profile/` + generateUserId(userId))
      .then((response) => response.data);
  },
  getStatus(userId: string) {
    return instance
      .get("profile/status/" + generateUserId(userId))
      .then((response) => {
        return response.data;
      });
  },
  updateStatus(status: string) {
    return instance
      .put("profile/status/", {
        status,
      })
      .then((response) => response.data);
  },
  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put<ServerResponse<{ photos: ProfilePhotos }>>(
        "/profile/photo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  },
  saveProfile(profileData: profileServerData) {
    return instance
      .put<ServerResponse<{}>>("profile", profileData)
      .then((response) => {
        return response.data;
      });
  },
};

const generateUserId = (userId?: string) => (userId ? userId : userId);

type ServerResponse<T> = {
  resultCode: number;
  messages: string[];
  data: T;
};

// export type profileServerData = {
//   contacts?: ProfileContacts;
//   lookingForAJob: boolean;
//   lookingForAJobDescription: string;
//   fullName: string;
//   aboutMe: string
// };

// userId need for thunk that send request for update userInfo
export type profileServerData = Omit<
  ProfileType,
  "photos" | "contacts" | "userId"
>;
