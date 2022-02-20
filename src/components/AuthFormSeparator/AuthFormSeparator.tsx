import React from 'react';

const AuthFormSeparator = () => {
  return (
    <div className='relative flex py-2 items-center w-[300px]'>
      <div className='flex-grow border-t border-gray-400'></div>
      <span className='flex-shrink mx-4 text-gray-400 font-medium dark:text-white'>
        or
      </span>
      <div className='flex-grow border-t border-gray-400'></div>
    </div>
  );
};

export default AuthFormSeparator;
