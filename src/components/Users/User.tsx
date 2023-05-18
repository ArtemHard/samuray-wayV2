import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UsersType } from "../../redux/users-reducer";
import { avatarUrlUndefined } from "../assets/images/constantsImg";
import { Paginator } from "../common/Paginator/Paginator";

type UserPropsType = {
  user: UsersType;
  followingInProgress: number[];
  follow: (id: number) => void;
  unFollow: (id: number) => void;
};
export const User = ({
  // currentPage,
  follow,
  followingInProgress,
  // onPageChanged,
  // pageSize,
  // totalUsersCount,
  unFollow,
  user,
}: UserPropsType) => {
  return (
    <div>
      <span>
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
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

const AvatarImg = styled.img.attrs({
  className: "userPhoto",
})`
  width: 100px;
  height: 100px;
`;
