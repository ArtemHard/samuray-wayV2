import * as React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Footer } from "./Footer";
// import ProfileContainer from "./components/Profile/ProfileContainer/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Login } from "./components/Login/Login";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { lazy, useEffect } from "react";
import { initializeApp } from "./redux/actions/appAC";
import { selectorAppInitialized } from "./redux/selectors";
import { Loader } from "./components/common/Loader/Loader";
import { withSuspenseComponent } from "./utils/withSuspenseComponent";

const DialogsContainer = lazy(
  async () => import("./components/Dialogs/DialogsContainer")
);

const ProfileContainer = lazy(
  () => import("./components/Profile/ProfileContainer/ProfileContainer")
);

function App() {
  const { initialized } = useAppSelector(selectorAppInitialized);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initializeApp());
  }, []);
  return initialized ? (
    <div className='AppWrapper'>
      <HeaderContainer />
      <Navbar />
      <Routes>
        <Route
          path={"/profile/:userId?"}
          element={withSuspenseComponent(ProfileContainer)}
        />
        <Route
          path={"/dialogs"}
          element={withSuspenseComponent(DialogsContainer)}
        />
        <Route path='/users' element={<UsersContainer />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
}

export default App;

{
  /* <React.Suspense fallback={<>...</>}>
<ProfileContainer />
</React.Suspense> */
}
