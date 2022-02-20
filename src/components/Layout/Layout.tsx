import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDarkMode } from '../../hooks';

const Layout = () => {
  const [isDark, setDarkMode] = useDarkMode();
  return (
    <div className='h-screen bg-white dark:bg-t-bg-dark text-t-black dark:text-white relative'>
      <button
        className='absolute top-2 right-2 z-20'
        onClick={() => setDarkMode(!isDark)}
      >
        {isDark ? 'l' : 'd'}
      </button>
      <Outlet />
    </div>
  );
};

export default Layout;
