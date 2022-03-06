import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { navItems, PROFILE_PATH } from '../../constants';
import {
  ImageAvatar,
  NavLink,
  ProfileButton,
  SwitchDarkMode,
  TweetButton,
} from '..';

import { logout } from '../../services';
import { UserContext } from '../../context';

const SideNavBar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { userAuth } = useContext(UserContext);
  return (
    <div className='sticky top-0 left-0 h-screen w-[68px] sm:w-[275px] flex flex-col justify-between border-r border-r-t-extra-light-gray pr-2 pb-2'>
      <nav className='mb-2 flex flex-col justify-start items-start'>
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
            <NavLink
              key={index}
              text={n.text}
              to={n.path === PROFILE_PATH ? `/profile/${userAuth.id}` : n.path}
              path={n.icon}
            />
          ))}
          <TweetButton />
        </ul>
      </nav>
      <div className='menu relative'>
        <ProfileButton callback={() => setShowLogout(!showLogout)} />
        <div
          className={`absolute bottom-[60px]  w-[275px] h-[200px] border border-t-light-gray flex flex-col rounded-3xl bg-white dark:bg-t-extra-light-gray shadow-md py-4 px-5 space-y-5 ${
            showLogout ? 'flex' : 'hidden'
          }`}
          onClick={() => setShowLogout(false)}
        >
          <div className='flex items-center'>
            <div className='w-[38px] h-[38px] mr-2'>
              <ImageAvatar />
            </div>
            <div className='flex flex-col'>
              <p className='text-black font-semibold text-base'>
                {userAuth.name}
              </p>
              <p className='text-t-light-gray'>{userAuth.atTweeterName}</p>
            </div>
          </div>
          <hr />
          <div>
            <button
              className='flex items-center justify-center cursor-pointer p-3 sm:py-2 sm:pr-6  sm:pl-3 rounded-3xl hover:bg-t-dark-gray/20 '
              onClick={logout}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mr-2 text-black'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                />
              </svg>
              <span className='text-black'>Logout</span>
            </button>
            <div className='mt-3 flex items-center sm:pl-3'>
              <p className='mr-3 text-black'>Dark Mode</p>
              <SwitchDarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
