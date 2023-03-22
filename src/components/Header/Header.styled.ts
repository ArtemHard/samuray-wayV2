import styled from "styled-components";

export const HeaderWrapper = styled.div.attrs({
  className: "headerWrapper",
})`
  background-color: green;
  grid-area: h;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgWrapper = styled.span`
  padding-left: 2%;

  & > img {
    width: 50px;
  }
`;

export const LoginBlock = styled.div.attrs({
  className: "loginBlock",
})`
  padding-right: 2%;
  & > a {
    color: white;
    text-decoration: none;
  }
`;
