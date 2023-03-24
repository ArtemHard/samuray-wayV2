import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { DialogsReducer } from "./dialogs-reducer";
import { ProfileReducer } from "./profile-reducer";
import { authReducer } from "./reducers/auth-reducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./users-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  dialogsPage: DialogsReducer,
  profilePage: ProfileReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
});

export type reducersType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export type storeType = typeof store;

export const store = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store;
