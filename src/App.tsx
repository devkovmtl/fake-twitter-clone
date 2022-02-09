import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HOME_PATH } from './constants';
import { Landing } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Landing />} />
    </Routes>
  );
};

export default App;
