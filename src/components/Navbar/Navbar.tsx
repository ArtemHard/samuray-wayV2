import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";

export const Navbar = () => {
    return (
        <div className={'Nav'}>
            <NavWrapper><NavLink to={'/profile'}> Profile</NavLink></NavWrapper>
            <NavWrapper><NavLink to={'/dialogs'}> Dialogs</NavLink></NavWrapper>
            <NavWrapper><NavLink to={'/messages'}> Messages</NavLink></NavWrapper>
            <NavWrapper><NavLink to={'/news'}>News</NavLink></NavWrapper>
            <NavWrapper><NavLink to={'/music'}>Music</NavLink></NavWrapper>
            <NavWrapper><NavLink to={'/seetings'}>Seetings</NavLink></NavWrapper>
        </div>
    );
};


const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;
  & > a {
    text-decoration: none;
    color: white;
  }
  & > a.active {
    text-decoration: none;
    color: black;
  }
  
  & > a:hover {
    //background: #786b59; /* Цвет фона под ссылкой */
    color: steelblue; /* Цвет ссылки */
  }

  //a:visited {
  //  color: #b4ddf6;
  //}
`