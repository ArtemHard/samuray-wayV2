import {
  addPost,
  setStatus,
  setUserProfile,
  updatePosts,
} from "./actions/profileAC";
import { ProfileReducer } from "./profile-reducer";

describe("ProfileReducer", () => {
  let initialState = {
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
    newPostText: "",
    profile: null,
    status: "",
  };

  it("should add a new post to the state", () => {
    const action = addPost("Hello world!");
    const newState = ProfileReducer(initialState, action);
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[0].message).toBe("Hello world!");
  });

  it("should update the new post text in the state", () => {
    const action = updatePosts("Hello world!");
    const newState = ProfileReducer(initialState, action);
    expect(newState.newPostText).toBe("Hello world!");
  });

  it("should set the user profile in the state", () => {
    const profile = {
      aboutMe: "I am a software developer",
      contacts: { email: "john.doe@example.com", phone: "123-456-7890" },
      lookingForAJob: true,
      lookingForAJobDescription: "Looking for remote work",
      fullName: "John Doe",
      userId: 123,
      photos: { small: "", large: "" },
    };
    const action = setUserProfile(profile);
    const newState = ProfileReducer(initialState, action);
    expect(newState.profile).toEqual(profile);
  });

  it("should set the user status in the state", () => {
    const action = setStatus("Online");
    const newState = ProfileReducer(initialState, action);
    expect(newState.status).toBe("Online");
  });
});
