import "./App.css";
import { Footer } from "./Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer/ProfileContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";

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
