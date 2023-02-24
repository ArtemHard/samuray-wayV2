import React from 'react';
import styled from "styled-components";
import {ProfileInfo} from "../ProfileInfo";

type PropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return (
        <PostWrapper>
            {/*<img*/}
            {/*    src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"*/}
            {/*    alt="ava"/>*/}

            <span>{props.message}</span>
            <div>Like: {props.likesCount}</div>
        </PostWrapper>
    );
};

const PostWrapper = styled.div`
  margin-top: 50px;

  & > img {
    width: 50px;
  }

`