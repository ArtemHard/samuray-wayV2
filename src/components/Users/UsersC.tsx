import axios from "axios";
import React from "react";
import styled from "styled-components";
import { UsersType } from "../../redux/users-reducer";
import { avatarUrlUndefined } from "../assets/images/constantsImg";

type UsersPropsType = {
  users: Array<UsersType>;
  pageSize: number;
  totalUsersCount: number;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  setUsersAC: (users: UsersType[]) => void;
};

class UserC extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsersAC(response.data.items);
      });
  }

  render() {
    let pagesCount = this.props.totalUsersCount / this.props.pageSize;
    return (
      <div>
        <div>
          <SpanPageCount>1</SpanPageCount>
          <SpanPageCount className='selected'>2</SpanPageCount>
          <SpanPageCount>3</SpanPageCount>
          <SpanPageCount>4</SpanPageCount>
          <SpanPageCount>5</SpanPageCount>
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <AvatarImg
                  src={u.photos.small ? u.photos.small : avatarUrlUndefined}
                />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.follow(u.id)}>
                    Followed
                  </button>
                ) : (
                  <button onClick={() => this.props.unFollow(u.id)}>
                    UnFollowed
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
  }
}

const AvatarImg = styled.img.attrs({
  className: "userPhoto",
})`
  width: 100px;
  height: 100px;
`;

type SpanPageCountType = {
  className?: string;
};
const SpanPageCount = styled.span<SpanPageCountType>`
  font-weight: ${(props) =>
    props.className === "selected" ? "bold" : "normal"};
`;

export default UserC;
