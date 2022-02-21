import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext } from './context';
import { useAuthListener } from './hooks';

import { Layout } from './components';
import {
  HOME_PATH,
  LOGIN_PATH,
  PASSWORD_RESET_PATH,
  REGISTER_PATH,
} from './constants';
import { ProtectedRoute, UserRedirect } from './helpers/routes';
import {
  Home,
  Signin,
  Signup,
  NotLoggedLanding,
  ForgoutPassword,
} from './pages';

const App = () => {
  const [userAuth] = useAuthListener();
  return (
    <UserContext.Provider value={{ userAuth }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* HOME PAGE IF USER IS LOGGED */}
          <Route element={<ProtectedRoute authUser={userAuth} />}>
            <Route path={HOME_PATH} element={<Home />} />
          </Route>

          {/* HOME PAGE IF USER IS NOT LOGGED */}
          <Route element={<UserRedirect authUser={userAuth} />}>
            <Route path='/' element={<NotLoggedLanding />} />
          </Route>

          {/* LOGIN PAGE */}
          <Route element={<UserRedirect authUser={userAuth} />}>
            <Route path={LOGIN_PATH} element={<Signin />} />
          </Route>
          {/* REGISTER PAGE */}
          <Route element={<UserRedirect authUser={userAuth} />}>
            <Route path={REGISTER_PATH} element={<Signup />} />
          </Route>
          {/* RESET PASSWORD PAGE */}
          <Route element={<UserRedirect authUser={userAuth} />}>
            <Route path={PASSWORD_RESET_PATH} element={<ForgoutPassword />} />
          </Route>

          {/* NOT FOUND */}
          <Route path='*' element={<>NOT FOUND</>} />
        </Route>
      </Routes>
      <ToastContainer />
    </UserContext.Provider>
  );
};

export default App;
