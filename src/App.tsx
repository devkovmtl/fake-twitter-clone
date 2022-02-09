import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HOME_PATH, SIGNUP_PATH } from './constants';
import { Landing, Signup } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Landing />} />
      <Route path={SIGNUP_PATH} element={<Signup />} />
    </Routes>
  );
};

export default App;
