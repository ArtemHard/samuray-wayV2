import React, { FC } from "react";
import style from "./Post.module.css";

type PostProps = {
  message: string
  likes?: number
}

const Post:FC<PostProps> = ({message, likes}) => {
  return (
    <div className={style.item}>
      <img src="https://www.blexar.com/avatar.png" alt="avatr" />
      {message}
      <div>
        <span>likes: {likes? likes : 0}</span>
      </div>
    </div>
  );
};

export default Post;
