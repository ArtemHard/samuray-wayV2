import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Footer } from "./Footer";
import ProfileContainer from "./components/Profile/ProfileContainer/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Login } from "./components/Login/Login";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { useEffect } from "react";
import { initializeApp } from "./redux/actions/appAC";
import { selectorAppInitialized } from "./redux/selectors";
import { Loader } from "./components/common/Loader/Loader";

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
        <Route path={"/profile/:userId?"} element={<ProfileContainer />} />
        <Route path={"/dialogs"} element={<DialogsContainer />} />
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
