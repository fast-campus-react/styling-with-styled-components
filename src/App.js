import logo from "./logo.svg";
import "./App.css";
import styled, { css, ThemeProvider } from "styled-components";
import Buttons from "./components/Buttons";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595",
};

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Buttons>BUTTON</Buttons>
          <Buttons color="gray">BUTTON</Buttons>
          <Buttons color="pink">BUTTON</Buttons>
        </ButtonGroup>
        <ButtonGroup>
          <Buttons size="large">BUTTON</Buttons>
          <Buttons color="gray">BUTTON</Buttons>
          <Buttons size="small" color="pink">BUTTON</Buttons>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
