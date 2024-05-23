import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Inputs from './components/Inputs';
import Months from './components/Months';
import List from './components/List';

const Main = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Inputs />
        <Months />
        <List />
      </Main>
    </>
  );
}

export default App;
