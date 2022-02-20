import React from 'react';

type AuthFormTitleHeaderProps = {
  title: string;
};

const AuthFormTitleHeader = ({ title }: AuthFormTitleHeaderProps) => (
  <div className='h-[56px]'>
    <h1 className='text-black dark:text-white text-2xl font-bold my-4'>
      {title}
    </h1>
  </div>
);

export default AuthFormTitleHeader;
