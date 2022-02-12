import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  HOME_PATH,
  SIGNUP_PATH,
  SIGNIN_PATH,
  PASSWORD_RESET_PATH,
} from './constants';
import { Landing, Signup, Signin, ForgoutPassword } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Landing />} />
      <Route path={SIGNUP_PATH} element={<Signup />} />
      <Route path={SIGNIN_PATH} element={<Signin />} />
      <Route path={PASSWORD_RESET_PATH} element={<ForgoutPassword />} />
    </Routes>
  );
};

export default App;
