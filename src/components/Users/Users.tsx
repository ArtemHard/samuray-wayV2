import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { usersApi } from "../../api/usersApi";
import { UsersType } from "../../redux/users-reducer";
import { avatarUrlUndefined } from "../assets/images/constantsImg";
import { SpanPageCount } from "./Users.styled";

type UsersPropsType = {
  users: Array<UsersType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  onPageChanged: (pageNumber: number) => void;
};
export const Users = (props: UsersPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <SpanPageCount
              key={p}
              className={props.currentPage === p ? "selected" : ""}
              onClick={() => props.onPageChanged(p)}
            >
              {p}
            </SpanPageCount>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <AvatarImg
                  src={u.photos.small ? u.photos.small : avatarUrlUndefined}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    usersApi.unFollowUser(u.id).then((data) => {
                      console.log(data);

                      if (data.resultCode === 0) {
                        props.unFollow(u.id);
                      }
                    });
                  }}
                >
                  UnFollowed
                </button>
              ) : (
                <button
                  onClick={() => {
                    usersApi.followUser(u.id).then((data) => {
                      console.log(data);
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
                  }}
                >
                  Followed
                </button>
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
