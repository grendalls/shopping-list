import React from 'react';
import { Menu } from '../menu';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainContainer } from './styles';

const App = () => {
  return (
    <MainContainer>
      <Router>
        <Menu />
      </Router>
    </MainContainer>
  );
};

export default App;
