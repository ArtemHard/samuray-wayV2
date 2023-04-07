import React, { useRef } from "react";
import styled from "styled-components";
import { PostType } from "../../../redux/types/reducersTypes/profileReducerType";
import { Post } from "./Post/Post";
import { CommonForm } from "../../../common/CommonForm";

type PostsType = {
  posts: PostType[];
  newPostText: string;
  addPost: (newPostText: string) => void;
};

export const MyPosts = (props: PostsType) => {
  const posts = props.posts.map((post) => {
    return (
      <Post key={post.id} message={post.message} likesCount={post.likesCount} />
    );
  });

  return (
    <MyPostsWrapper>
      <div>MyPosts</div>
      {/* <textarea
        cols={30}
        rows={10}
        ref={newPostElement}
        value={props.newPostText}
        onChange={onChangeHandler}
      />
      <div>
        <button onClick={addPostHandler}>add post</button>
        <button>remove post</button>
      </div> */}
      <CommonForm onSubmitHandler={props.addPost} textArea={true} />
      {posts}
    </MyPostsWrapper>
  );
};

const MyPostsWrapper = styled.div`
  // background-color: dodgerblue;
  margin-left: 20px;
`;
