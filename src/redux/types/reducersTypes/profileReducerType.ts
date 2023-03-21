export interface ProfileType {
  aboutMe: string;
  contacts: ProfileContacts;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: ProfilePhotos;
}

export interface ProfileContacts {
  facebook: string;
  website: any;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: any;
  github: string;
  mainLink: any;
}

export interface ProfilePhotos {
  small: string;
  large: string;
}

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};
