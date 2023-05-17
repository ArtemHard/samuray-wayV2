import styled from "styled-components";
import { Loader } from "../../common/Loader/Loader";
import { ProfileStatus } from "./ProfileStatus";
import { ProfilePropsType } from "../Profile";

export const ProfileInfo = ({
  profile,
  status,
  updateStatus,
}: ProfilePropsType) => {
  if (!profile) {
    return <Loader />;
  } else
    return (
      <Wrapper>
        <img
          src='https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png'
          alt='ava'
        />

        <div>
          <AvatarImg src={profile.photos.large} />
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
  width: 300px;
  object-fit: cover;
`;
