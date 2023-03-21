import React from "react";
import { ProfileInfo } from "./MyPosts/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { profilePageType } from "../../redux/profile-reducer";
import { ProfileType } from "../../redux/types/reducersTypes/profileReducerType";

type ProfilePropsType = {
  profile: ProfileType | null;
  setUserProfile: (data: any) => void;
};

export const Profile = ({ profile, setUserProfile }: ProfilePropsType) => {
  return (
    <div className={"MainContent"}>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>TS</li>
        <li>REACT</li>
      </ul>
      <ProfileInfo profile={profile} />

      <MyPostsContainer
      //state={props.profilePage}
      />
    </div>
  );
};
