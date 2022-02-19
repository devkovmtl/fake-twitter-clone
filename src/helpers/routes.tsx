import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { HOME_PATH, LOGIN_PATH } from '../constants';

type RouteProps = {
  authUser: any;
};

export const ProtectedRoute = ({ authUser }: RouteProps) => {
  const location = useLocation();
  return authUser ? (
    <Outlet />
  ) : (
    <Navigate to={LOGIN_PATH} state={{ from: location }} replace />
  );
};

// user is Logged in and try to access login, register, reset password....
export const UserRedirect = ({ authUser }: RouteProps) => {
  const location = useLocation();
  return authUser ? (
    <Navigate to={HOME_PATH} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
