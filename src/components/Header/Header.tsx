import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HeaderWrapper, ImgWrapper, LoginBlock } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderWrapper>
      <ImgWrapper>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png'
          alt='logo'
        />
      </ImgWrapper>
      <LoginBlock>
        <NavLink to={"/login"}>Login</NavLink>
      </LoginBlock>
    </HeaderWrapper>
  );
};
