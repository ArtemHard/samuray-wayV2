import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UsersType } from "../../redux/users-reducer";
import { avatarUrlUndefined } from "../assets/images/constantsImg";

type UserPropsType = {
  user: UsersType;
  followingInProgress: number[];
  follow: (id: number) => void;
  unFollow: (id: number) => void;
};
export const User = ({
  follow,
  followingInProgress,
  unFollow,
  user,
}: UserPropsType) => {
  return (
    <div>
      <div>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <AvatarImg
              src={user.photos.small ? user.photos.small : avatarUrlUndefined}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              onClick={() => follow(user.id)}
              disabled={followingInProgress.some((id) => id === user.id)}
            >
              UnFollowed
            </button>
          ) : (
            <button
              onClick={() => unFollow(user.id)}
              disabled={followingInProgress.some((id) => id === user.id)}
            >
              Followed
            </button>
          )}
        </div>
      </div>
      <div>
        <div>
          <h4>{user.name}</h4>
          <p>{user.status}</p>
        </div>
        <div>
          <p>{"u.location.country"}</p>
          <p>{"u.location.city"}</p>
        </div>
      </div>
    </div>
  );
};

const AvatarImg = styled.img.attrs({
  className: "userPhoto",
})`
  width: 100px;
  height: 100px;
`;
