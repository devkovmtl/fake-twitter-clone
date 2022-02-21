import React from 'react';
import { Outlet } from 'react-router-dom';
import { SwitchDarkMode } from '..';

const Layout = () => {
  return (
    <div className='h-screen bg-white dark:bg-t-bg-dark text-t-black dark:text-white relative'>
      <div className='absolute right-1 top-1'>
        <SwitchDarkMode />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
