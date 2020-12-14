import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${(props) => lighten(0.1, selected)};
      }
      &:active {
        background: ${(props) => darken(0.1, selected)};
      }
    `;
  }}
`;

const StyleButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  font-size: 1rem;

  ${colorStyles}

  & + & {
    margin-left: 1rem;
  }
`;

function Buttons({ children, color }) {
  return <StyleButton color={color}>{children}</StyleButton>;
}

Buttons.defaultProps = {
  color: "blue",
};

export default Buttons;
