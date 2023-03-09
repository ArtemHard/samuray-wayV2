import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { reducersType } from "../../redux/redux-store";
import {
  followAC,
  setUsersAC,
  unFollowAC,
  UsersType,
} from "../../redux/users-reducer";
import { Users } from "./Users";
import UserC from "./UsersC";

type MapStateToPropsType = {
  users: Array<UsersType>;
};
const mapStateToProps = (state: reducersType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
  };
};

type MapDispatchToProps = {
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  setUsersAC: (users: UsersType[]) => void;
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    follow: (id: number) => {
      dispatch(followAC(id));
    },
    unFollow: (id: number) => {
      dispatch(unFollowAC(id));
    },
    setUsersAC: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserC);
export default UsersContainer;
