import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";
import { Footer } from "./Footer";

import ProfileContainer from "./components/Profile/ProfileContainer/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {
  return (
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
  );
}

export default App;
