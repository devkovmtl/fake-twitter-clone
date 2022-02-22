import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { navItems } from '../../constants';
import { NavLink, ProfileButton, TweetButton } from '..';

import { logout } from '../../services';

const SideNavBar = () => {
  const [showLogout, setShowLogout] = useState(false);
  return (
    <div className='w-[75px] sm:w-[275px] h-screen border-r border-r-t-extra-light-gray py-3 flex flex-col justify-between items-center'>
      <nav className='sm:-ml-10 mb-2 flex flex-col justify-start items-start'>
        <ul>
          <li className='mb-2 '>
            <Link
              to='/'
              className='block h-12 w-12 rounded-full p-4 hover:bg-t-blue/20 relative transition-all ease-out'
            >
              <BsTwitter
                size={28}
                color={'#1DA1F2'}
                className='absolute top-[8px] left-[8px]'
              />
            </Link>
          </li>
          {navItems.map((n, index) => (
            <NavLink key={index} to={n.text} path={n.icon} />
          ))}
          <TweetButton />
        </ul>
      </nav>
      <div className='relative'>
        <ProfileButton callback={() => setShowLogout(!showLogout)} />
        <div
          className={`absolute -top-[125px] right-1 rounded-xl border border-t-extra-light-gray shadow-xl sm:w-[230px] h-[120px] ${
            showLogout ? 'flex' : 'hidden'
          } flex-col justify-center px-2`}
        >
          <button
            className='flex items-center justify-center cursor-pointer p-3 sm:py-2 sm:pr-6  sm:pl-3 rounded-3xl hover:bg-t-dark-gray/20'
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
