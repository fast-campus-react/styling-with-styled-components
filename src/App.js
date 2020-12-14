import logo from "./logo.svg";
import "./App.css";
import styled, { css } from "styled-components";
import Buttons from "./components/Buttons";


const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;

`;



function App() {
  return (
    <AppBlock>
      <Buttons>BUTTON</Buttons>
    </AppBlock>
  );
}

export default App;
