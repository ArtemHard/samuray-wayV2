import { PostType } from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEWPOST = "UPDATE-NEWPOST";

export type profilePageType = {
  posts: PostType[];
  newPostText: string;
};
let initialState: profilePageType = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you",
      likesCount: 0,
    },
    {
      id: 2,
      message: "I`ts my first post",
      likesCount: 13,
    },
  ],
  newPostText: "it-Kamasutra",
};

export const ProfileReducer = (
  state = initialState,
  action: ActionTypes
): profilePageType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    }
    case UPDATE_NEWPOST: {
      state.newPostText = action.newText;
      return state;
    }
    default:
      return state;
  }
};

type ActionTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updatePostsAC>;

export const addPostAC = () => {
  return {
    type: ADD_POST,
  } as const;
};
export const updatePostsAC = (text: string) => {
  return {
    type: UPDATE_NEWPOST,
    newText: text,
  } as const;
};
