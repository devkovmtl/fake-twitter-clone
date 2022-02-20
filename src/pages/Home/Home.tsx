import React from 'react';
import { logout } from '../../services';

const Home = () => {
  return (
    <div>
      <h1 className='text-blue-500 text-3xl font-bold underline'>
        TWITTER CLONE
      </h1>
      <button onClick={logout}>LoGout</button>
    </div>
  );
};

export default Home;
