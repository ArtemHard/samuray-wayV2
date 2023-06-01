import styled from "styled-components";
import { Loader } from "../../common/Loader/Loader";
import { ProfileStatus } from "./ProfileStatus";
import { ProfilePropsType } from "../Profile";
import { avatarUrlUndefined } from "../../assets/images/constantsImg";
import { useAppDispatch } from "../../../hooks/reduxHooks";

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
  if (!profile) {
    return <Loader />;
  } else
    return (
      <Wrapper>
        {/* <img
          src='https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png'
          alt='ava'
        /> */}

        <div>
          <AvatarImg src={profile.photos.large || avatarUrlUndefined} />
          {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
          <ProfileStatus status={status} updateStatus={updateStatus} />
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
