import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HOME_PATH, SIGNUP_PATH, SIGNIN_PATH } from './constants';
import { Landing, Signup, Signin } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Landing />} />
      <Route path={SIGNUP_PATH} element={<Signup />} />
      <Route path={SIGNIN_PATH} element={<Signin />} />
    </Routes>
  );
};

export default App;
