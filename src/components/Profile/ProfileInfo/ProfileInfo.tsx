import styled from "styled-components";
import { useState } from "react";
import { Loader } from "../../common/Loader/Loader";
import { ProfileStatus } from "./ProfileStatus";
import { ProfilePropsType } from "../Profile";
import { avatarUrlUndefined } from "../../assets/images/constantsImg";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { ProfileType } from "../../../redux/types/reducersTypes/profileReducerType";
import { ProfileDataForm } from "./ProfileDataForm";

export const ProfileInfo = ({
  isOwner,
  profile,
  status,
  updateStatus,
  savePhoto,
}: ProfilePropsType) => {
  const dispatch = useAppDispatch();

  const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(savePhoto(e.target.files[0]));
    }
  };

  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Loader />;
  } else
    return (
      <Wrapper>
        <div>
          <AvatarImg src={profile.photos.large || avatarUrlUndefined} />
          {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
          {editMode ? (
            <ProfileDataForm profile={profile} setEditMode={setEditMode} />
          ) : (
            <ProfileData
              activateMode={() => {
                setEditMode(true);
              }}
              isOwner={isOwner}
              profile={profile}
            />
          )}
        </div>
        <div>
          <div>
            <b>{profile.fullName}</b>
          </div>
          <div>{profile.aboutMe}</div>
          <div>{profile.contacts.vk}</div>
        </div>
      </Wrapper>
    );
};

const Wrapper = styled.div`
  //margin-top: 50px;
  & > img {
    width: 50px;
  }
`;
type AvatarImgPropsType = {
  src: string;
};
const AvatarImg = styled.img.attrs<AvatarImgPropsType>((props) => ({
  src: props.src,
}))`
  width: 150px;
  object-fit: cover;
`;

type ContactPropsType = {
  contactTitle: string;
  contactValue: string;
};
export const Contact = ({ contactTitle, contactValue }: ContactPropsType) => {
  return (
    <ContactWrapper>
      <b>{contactTitle}</b>: {contactValue}
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  padding: 0 20px;
`;

export type ProfileDataType = {
  isOwner: boolean;
  profile: ProfileType;
  activateMode: () => void;
};

const ProfileData = ({ profile, isOwner, activateMode }: ProfileDataType) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={activateMode}>edit</button>
        </div>
      )}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJobDescription && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJob}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              //@ts-ignore
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};
