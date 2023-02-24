import React from 'react';
import styled from "styled-components";

export const ProfileInfo = () => {
    return (
        <Wrapper>
            <img
                src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
                alt="ava"/>

            <div>Ava + description</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  //margin-top: 50px;
  & > img {
    width: 50px;
  }

`