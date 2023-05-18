import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UsersType } from "../../redux/users-reducer";
import { avatarUrlUndefined } from "../assets/images/constantsImg";
import { Paginator } from "../common/Paginator/Paginator";
import { User } from "./User";

type UsersPropsType = {
  users: Array<UsersType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  followingInProgress: number[];
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  onPageChanged: (pageNumber: number) => void;
};
export const Users = ({
  currentPage,
  follow,
  followingInProgress,
  onPageChanged,
  pageSize,
  totalUsersCount,
  unFollow,
  users,
}: UsersPropsType) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
      />
      {users.map((u) => (
        <User
          key={u.id}
          follow={follow}
          followingInProgress={followingInProgress}
          unFollow={unFollow}
          user={u}
        />
      ))}
    </div>
  );
};
