import React from 'react';
import styled from "styled-components";

export const Header = () => {
    return (
        <div className={'Header'}>
            <ImgWrapper>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"
                     alt="logo"/>
            </ImgWrapper>

        </div>
    );
};

const ImgWrapper = styled.span`
  align-items: center;

  & > img {
    width: 50px;
  }

`

