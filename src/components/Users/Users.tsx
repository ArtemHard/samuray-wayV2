import axios from "axios";
import React from "react";
import styled from "styled-components";
import { UsersType } from "../../redux/users-reducer";
import { avatarUrlUndefined } from "../assets/images/constantsImg";

type UsersPropsType = {
  users: Array<UsersType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  setUsers: (users: UsersType[]) => void;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
};
export const Users = (props: UsersPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <AvatarImg
                src={u.photos.small ? u.photos.small : avatarUrlUndefined}
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.follow(u.id)}>Followed</button>
              ) : (
                <button onClick={() => props.unFollow(u.id)}>UnFollowed</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

const AvatarImg = styled.img.attrs({
  className: "userPhoto",
})`
  width: 100px;
  height: 100px;
`;
