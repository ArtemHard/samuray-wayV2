import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthInitialStateType } from "../../redux/reducers/auth-reducer";
import { HeaderWrapper, ImgWrapper, LoginBlock } from "./Header.styled";
import { HeaderDispatchProps } from "./HeaderContainer";

type HeaderPropsType = AuthInitialStateType & HeaderDispatchProps;

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
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </LoginBlock>
    </HeaderWrapper>
  );
};
