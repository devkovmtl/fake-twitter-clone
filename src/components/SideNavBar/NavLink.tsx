import React from 'react';
import { Link } from 'react-router-dom';
import { toTitleCase } from '../../utils';

type NavLinkProps = {
  text: string;
  to: string;
  path: JSX.Element;
};

const NavLink = ({ to, path, text }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className='w-fit flex items-center justify-start cursor-pointer p-3 sm:py-2 sm:pr-6  sm:pl-3 rounded-3xl hover:bg-t-dark-gray/20'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7 sm:mr-4'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        {path}
      </svg>
      <span className='hidden sm:block text-xl font-normal'>
        {toTitleCase(text)}
      </span>
    </Link>
  );
};

export default NavLink;
