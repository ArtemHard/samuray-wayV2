import styled from "styled-components";
import { PostType } from "../../../redux/types/reducersTypes/profileReducerType";
import { Post } from "./Post/Post";
import { CommonForm } from "../../../common/CommonForm";
import { memo } from "react";

type PostsType = {
  posts: PostType[];
  newPostText: string;
  addPost: (newPostText: string) => void;
};

export const MyPosts = memo((props: PostsType) => {
  const posts = props.posts.map((post) => {
    return (
      <Post key={post.id} message={post.message} likesCount={post.likesCount} />
    );
  });

  return (
    <MyPostsWrapper>
      <div>MyPosts</div>
      <CommonForm
        onSubmitHandler={props.addPost}
        textArea={true}
        maxLength={20}
      />
      {posts}
    </MyPostsWrapper>
  );
});

const MyPostsWrapper = styled.div`
  margin-left: 20px;
`;
