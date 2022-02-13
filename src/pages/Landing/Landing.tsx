import React, { useContext } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { UserContext } from '../../context';

const Landing = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='bg-black h-full w-full'>
      <div className='fixed top-0 left-0 flex flex-col'>
        <BsTwitter size={24} color={'#fff'} />
      </div>
      <p>{user.email}</p>
    </div>
  );
};

export default Landing;
