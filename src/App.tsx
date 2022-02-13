import React, { Children } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  HOME_PATH,
  SIGNUP_PATH,
  SIGNIN_PATH,
  PASSWORD_RESET_PATH,
} from './constants';
import { UserContext } from './context';
import { useUserAuthListener } from './hooks';
import {
  Landing,
  NotLoggedLanding,
  Signup,
  Signin,
  ForgoutPassword,
} from './pages';

const RequireAuth = ({ children }: any) => {
  let isAuth = null;
  return isAuth ? children : <Navigate to={`/${SIGNIN_PATH}`} />;
};

const App = () => {
  const { user } = useUserAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Routes>
        <Route
          path={HOME_PATH}
          element={user ? <Landing /> : <NotLoggedLanding />}
        />
        <Route path={SIGNUP_PATH} element={<Signup />} />
        <Route path={SIGNIN_PATH} element={<Signin />} />
        <Route path={PASSWORD_RESET_PATH} element={<ForgoutPassword />} />
      </Routes>
      <ToastContainer />
    </UserContext.Provider>
  );
};

export default App;
