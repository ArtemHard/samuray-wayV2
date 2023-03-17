import styled from "styled-components";

export const AvatarImg = styled.img.attrs({
  className: "userPhoto",
})`
  width: 100px;
  height: 100px;
`;

type SpanPageCountType = {
  className?: string;
};
export const SpanPageCount = styled.span<SpanPageCountType>`
  font-weight: ${(props) =>
    props.className === "selected" ? "bold" : "normal"};
  cursor: pointer;
`;
