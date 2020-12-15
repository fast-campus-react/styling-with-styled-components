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
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;
const sizees = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizees[size].height};
    font-size: ${sizees[size].fontSize};
  `};
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
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

 

  ${sizeStyles}
  ${colorStyles}

  & + & {
    margin-left: 1rem;
  }

  ${fullWidthStyle}
  

 
`;

 //${fullWidthStyle}

function Buttons({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyleButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
       {children}
    </StyleButton>
  );
}

Buttons.defaultProps = {
  color: "blue",
  size: "medium",
};

export default Buttons;
