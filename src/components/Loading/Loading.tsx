import React from 'react';

const Loading = () => {
  return (
    <div className='w-11 h-11 border-2 border-gray-200 rounded-full animate-pulse flex items-center justify-center'>
      <div className='w-11 h-11 border-t-2 border-t-blue-500 rounded-full animate-spin'></div>
    </div>
  );
};

export default Loading;
