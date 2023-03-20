import { connect, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { reducersType } from "../../redux/redux-store";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unFollow,
  UsersType,
} from "../../redux/users-reducer";
import { Users } from "./Users";
import axios from "axios";
import React from "react";
import { usersApi } from "../../api/usersApi";
import { Loader } from "../common/Loader/Loader";

type UsersContainerPropsType = {
  users: Array<UsersType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  setUsers: (users: UsersType[]) => void;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};

class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersApi
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.toggleIsFetching(false);
        if (typeof data.totalCount === "number")
          this.props.setTotalUsersCount(data.totalCount);
      });
  }
  onPageChanged = (pageNumber: number) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

type MapStateToPropsType = {
  users: Array<UsersType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
};
const mapStateToProps = (state: reducersType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// type MapDispatchToProps = {
//   follow: (id: number) => void;
//   unFollow: (id: number) => void;
//   setUsers: (users: UsersType[]) => void;
//   setCurrentPage: (pageNumber: number) => void;
//   setTotalUsersCount: (totalUsersCount: number) => void;
//   toggleIsFetching: (isFetching: boolean) => void;
// };
type MapDispatchToProps = {
  follow: () => void;
  unFollow: () => void;
  setUsers: () => void;
  setCurrentPage: () => void;
  setTotalUsersCount: () => void;
  toggleIsFetching: () => void;
};
// const mapDispatchToProps = (dispatch: Dispatch): any => {
//   return {
//     follow: followAC,
//     unFollow: unFollowAC,
//     setUsers: setUsersAC,
//     setCurrentPage: setCurrentPageAC,
//     setTotalUsersCount: setTotalUsersCountAC,
//     toggleIsFetching: toggleIsFetchingAC,
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
