import React, { useContext } from 'react';
import { ImageAvatar } from '../';
import { UserContext } from '../../context';

type ProfileButtonProps = {
  callback: () => void;
};

function ProfileButton({ callback }: ProfileButtonProps) {
  const { userAuth } = useContext(UserContext);
  console.log(userAuth);
  return (
    <button
      className='sm:w-[230px] flex justify-between items-center p-3 rounded-full text-sm hover:bg-t-dark-gray/20'
      onClick={callback}
    >
      <div className='flex justify-between items-center '>
        <div className='w-[35px] h-[35px]'>
          <ImageAvatar />
        </div>
        <div className='hidden sm:block'>
          <p className='font-bold'>{userAuth.name}</p>
          <p className='text-t-light-gray'>{userAuth.atTweeterName}</p>
        </div>
      </div>
      <div className='hidden md:block'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
          />
        </svg>
      </div>
    </button>
  );
}

export default ProfileButton;
