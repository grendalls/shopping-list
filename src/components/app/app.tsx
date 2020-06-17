import React from 'react';
import { SideBar } from '../sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <SideBar />
    </Router>
  );
};

export default App;
