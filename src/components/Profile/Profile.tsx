import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { profilePageType } from "../../redux/profile-reducer";
import { ProfileType } from "../../redux/types/reducersTypes/profileReducerType";
import { AnyAction, Dispatch } from "redux";

export type ProfilePropsType = {
  isOwner: boolean;
  profile: ProfileType | null;
  status: string;
  savePhoto: (file: string) => void;
  updateStatus: (newStatus: string) => void;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={"MainContent"}>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>TS</li>
        <li>REACT</li>
      </ul>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </div>
  );
};
