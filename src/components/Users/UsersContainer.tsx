import { connect, ConnectedProps } from "react-redux";
import { reducersType } from "../../redux/redux-store";
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleIsFollowingProgress,
  unFollow,
  UsersType,
} from "../../redux/users-reducer";
import { Users } from "./Users";
import React from "react";
import { Loader } from "../common/Loader/Loader";

type UsersContainerPropsType = PropsFromRedux;

class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
          followingInProgress={this.props.followingInProgress}
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
  followingInProgress: number[];
};
const mapStateToProps = (state: reducersType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const connector = connect(mapStateToProps, {
  follow,
  unFollow,
  setCurrentPage,
  getUsers,
});

type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(UsersContainer);
