import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { reducersType, store } from "../../../redux/redux-store";
import { Dispatch } from "redux";

import { addPost, updatePosts } from "../../../redux/actions/profileAC";
import { PostType } from "../../../redux/types/reducersTypes/profileReducerType";

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

// type MapDispatchToProps = {
//   addPost: () => void;
//   onPostChange: (newText: string) => void;
// };
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//   return {
//     addPost: () => {
//       dispatch(addPostAC());
//     },
//     onPostChange: (newText: string) => {
//       dispatch(updatePostsAC(newText));
//     },
//   };
// };

let MyPostsContainer = connect(mapStateToProps, {
  addPost,
  onPostChange: updatePosts,
})(MyPosts);
export default MyPostsContainer;
