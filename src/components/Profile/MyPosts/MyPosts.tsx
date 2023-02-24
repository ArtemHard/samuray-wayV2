import React, { useRef } from "react";
import styled from "styled-components";
import { PostType } from "../../../redux/store";
import { Post } from "./Post/Post";

type PostsType = {
  posts: PostType[];
  onPostChange: (newText: string) => void;
  newPostText: string;
  addPost: () => void;
};

export const MyPosts = (props: PostsType) => {
  const posts = props.posts.map((post) => {
    return <Post message={post.message} likesCount={post.likesCount} />;
  });
  let newPostElement = useRef<HTMLTextAreaElement>(null);

  const onChangeHandler = () => {
    if (newPostElement.current) {
      let newText = newPostElement.current.value;
      props.onPostChange(newText);
      newPostElement.current.value = "";
    }
  };

  const addPostHandler = () => {
    props.addPost();
  };

  return (
    <MyPostsWrapper>
      <div>MyPosts</div>
      <textarea
        cols={30}
        rows={10}
        ref={newPostElement}
        value={props.newPostText}
        onChange={onChangeHandler}
      />
      <div>
        <button onClick={addPostHandler}>add post</button>
        <button>remove post</button>
      </div>
      {posts}
    </MyPostsWrapper>
  );
};

const MyPostsWrapper = styled.div`
  // background-color: dodgerblue;
  margin-left: 20px;
`;
