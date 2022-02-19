import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-t-bg-dark text-t-black dark:text-white'>
      <Outlet />
    </div>
  );
};

export default Layout;
