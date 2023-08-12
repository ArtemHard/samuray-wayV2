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
import { initializeApp, setGlobalError } from "./redux/actions/appAC";
import { selectorAppInitialized, selectorGlobalError } from "./redux/selectors";
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
  const globalError = useAppSelector(selectorGlobalError);
  const dispatch = useAppDispatch();

  const catchAllUnhandledErrors = (ev: PromiseRejectionEvent) => {
    // alert("some error occured");
    // dispatch(setGlobalError())
    console.error(ev);
  };

  useEffect(() => {
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
    dispatch(initializeApp());
    return () => {
      window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
    };
  }, []);

  useEffect(() => {
    if (globalError) {
      alert(globalError);
      setTimeout(() => {
        dispatch(setGlobalError(null));
      }, 3000);
    }
  }, [globalError]);
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
        <Route
          path='*'
          element={
            <div>
              <h1>404</h1>
            </div>
          }
        />
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
