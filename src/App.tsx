import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer/ProfileContainer";

function App() {
  return (
    <div className='AppWrapper'>
      <Header />
      <Navbar />
      <Routes>
        <Route path={"/profile/:userId?"} element={<ProfileContainer />} />
        <Route path={"/dialogs"} element={<DialogsContainer />} />
        <Route path='/users' element={<UsersContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
