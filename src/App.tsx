import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HOME_PATH } from './constants';

const Home = () => {
  return (
    <h1 className='text-blue-500 text-3xl font-bold underline'>
      TWITTER CLONE
    </h1>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Home />} />
    </Routes>
  );
};

export default App;
