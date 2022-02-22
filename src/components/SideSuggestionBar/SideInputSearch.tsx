import React from 'react';

function SideInputSearch() {
  return (
    <div className='flex items-center flex-row-reverse rounded-full group border border-transparent bg-t-extra-light-gray focus-within:bg-white focus-within:border-t-blue p-1'>
      <input
        type='text'
        placeholder='Search On Twitter'
        className='w-full bg-t-extra-light-gray group-focus-within:bg-white rounded-3xl border-none focus:border-none focus:outline-none focus:shadow-none focus:ring-0 text-black'
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6  text-t-dark-gray  group-focus-within:text-t-blue'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
    </div>
  );
}

export default SideInputSearch;
