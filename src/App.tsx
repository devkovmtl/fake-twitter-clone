import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HOME_PATH } from './constants';
import { Home } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Home />} />
    </Routes>
  );
};

export default App;
