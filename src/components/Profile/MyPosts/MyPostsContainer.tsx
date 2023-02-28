import { addPostAC, updatePostsAC } from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { reducersType, store } from "../../../redux/redux-store";
import { Dispatch } from "redux";
import { PostType } from "../../../redux/store";

type MapStateToProps = {
  posts: PostType[];
  newPostText: string;
};
const mapStateToProps = (state: reducersType): MapStateToProps => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

type MapDispatchToProps = {
  addPost: () => void;
  onPostChange: (newText: string) => void;
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    onPostChange: (newText: string) => {
      dispatch(updatePostsAC(newText));
    },
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
