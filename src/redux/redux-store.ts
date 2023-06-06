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
import { composeWithDevTools } from "redux-devtools-extension";
import { appReducer } from "./reducers/app-reducer";

const reducers = combineReducers({
  dialogsPage: DialogsReducer,
  profilePage: ProfileReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  app: appReducer,
});

export type reducersType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export type storeType = typeof store;
export type RootState = ReturnType<typeof store.getState>;

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// @ts-ignore
window.store = store;
