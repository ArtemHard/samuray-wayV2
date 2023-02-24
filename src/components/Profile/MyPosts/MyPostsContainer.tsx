import React from 'react';
import {addPostAC, updatePostsAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {profilePageType} from "../../../redux/store";
import {store} from "../../../redux/redux-store";
// import {StoreContext} from "../../../StoreContext";

type PostsType = {
    // posts: PostType[]
    // newPostText: string
    // dispatch: (action: any) => void
}

// export const _MyPostsContainer = (props: PostsType) => {
//
//     let consumer=useContext(StoreContext)
//     //let consumer=useContext(StoreContext)
//
//     const addPost = () => {
//         consumer.dispatch(addPostAC())
//     }
//
//     const onPostChange = (newText: string) => {
//         consumer.dispatch(updatePostsAC(newText))
//     }
//
//
//     return (
//         <MyPosts
//             posts={consumer.getState().profilePage.posts}
//             newPostText={consumer.getState().profilePage.newPostText}
//             onPostChange={onPostChange}
//             addPost={addPost}
//         />
//     );
// };

// const mapStateToProps = (state:profilePageType) => {
//     console.log(store.getState().profilePage.posts)
//     return {
//         posts: state.posts
//     }
// }

const mapStateToProps = (state:any) => {
    console.log(store.getState().profilePage.posts)
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}


const mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: () => {
          dispatch(addPostAC())
        },
        onPostChange: (newText: string) => {
            dispatch(updatePostsAC(newText))
        }
    }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
console.log(mapStateToProps)
export default MyPostsContainer