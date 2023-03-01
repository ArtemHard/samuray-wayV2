import React from "react";
import styled from "styled-components";
import { UsersType } from "../../redux/users-reducer";

type UsersPropsType = {
  users: Array<UsersType>;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  setUsersAC: (users: UsersType[]) => void;
};
export const Users = (props: UsersPropsType) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <AvatarImg src={u.photoUrl} />
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
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
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
