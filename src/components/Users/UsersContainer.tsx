import { connect } from "react-redux";
import { Dispatch } from "redux";
import { reducersType } from "../../redux/redux-store";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unFollowAC,
  UsersType,
} from "../../redux/users-reducer";
import { Users } from "./Users";
import axios from "axios";
import React from "react";

type UserAPIComponentPropsType = {
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

class UserAPIComponent extends React.Component<UserAPIComponentPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        if (typeof response.data.totalCount === "number")
          this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        // setUsers={this.props.setUsers}
        onPageChanged={this.onPageChanged}
        // setTotalUsersCount={this.props.setTotalUsersCount}
      />
    );
  }
}

type MapStateToPropsType = {
  users: Array<UsersType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
};
const mapStateToProps = (state: reducersType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

type MapDispatchToProps = {
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  setUsers: (users: UsersType[]) => void;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    follow: (id: number) => {
      dispatch(followAC(id));
    },
    unFollow: (id: number) => {
      dispatch(unFollowAC(id));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalUsersCount: number) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

let UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAPIComponent);
export default UsersContainer;
