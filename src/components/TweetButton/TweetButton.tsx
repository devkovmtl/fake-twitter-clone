import React from 'react';

const TweetButton = () => {
  return (
    <button className='bg-t-blue text-white block w-fit  rounded-full mt-4 p-4 hover:bg-t-blue-dark font-bold transition-all ease-out duration-150 sm:w-[230px]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 sm:hidden'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
        />
      </svg>
      <span className='hidden sm:block'>Tweet</span>
    </button>
  );
};

export default TweetButton;
