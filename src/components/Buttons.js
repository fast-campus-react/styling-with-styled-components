import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";

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

  background: #228be6;
  &:hover {
  background: ${lighten(0.1, '#228be6')};
  }
  &:active {
    background:${darken(0.1, '#228be6')};
  }

  & + & {
    margin-left: 1rem;
  }
`;

function Buttons({ children }) {
  return <StyleButton>{children}</StyleButton>;
}

export default Buttons;
