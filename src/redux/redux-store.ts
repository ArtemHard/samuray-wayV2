import { combineReducers, legacy_createStore as createStore } from "redux";
import { DialogsReducer } from "./dialogs-reducer";
import { ProfileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./users-reducer";

const reducers = combineReducers({
  dialogsPage: DialogsReducer,
  profilePage: ProfileReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
});
export type reducersType = ReturnType<typeof reducers>;

export type storeType = typeof store;

export const store = createStore(reducers);

// @ts-ignore
window.store = store;
