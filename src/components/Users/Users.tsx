import axios from "axios";
import React from "react";
import styled from "styled-components";
import { UsersType } from "../../redux/users-reducer";
import { avatarUrlUndefined } from "../assets/images/constantsImg";

type UsersPropsType = {
  users: Array<UsersType>;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  setUsersAC: (users: UsersType[]) => void;
};
export const Users = (props: UsersPropsType) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsersAC(response.data.items);
        });
    }
  };
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
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
