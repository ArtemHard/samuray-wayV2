import React from "react";
import { NavLink } from "react-router-dom";
import { AuthInitialStateType } from "../../redux/reducers/auth-reducer";
import { HeaderWrapper, ImgWrapper, LoginBlock } from "./Header.styled";

type HeaderPropsType = AuthInitialStateType & HeaderCallbacks;
type HeaderCallbacks = {
  logOutClickHandler: () => void;
};
export const Header = (props: HeaderPropsType) => {
  return (
    <HeaderWrapper>
      <ImgWrapper>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png'
          alt='logo'
        />
      </ImgWrapper>
      <LoginBlock>
        {props.isAuth ? (
          <div>
            {props.login} -{" "}
            <button onClick={props.logOutClickHandler}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </LoginBlock>
    </HeaderWrapper>
  );
};
