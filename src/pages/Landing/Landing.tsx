import React, { useContext } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { UserContext } from '../../context';
import { logout } from '../../services';

const Landing = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='bg-black h-full w-full text-white'>
      <div className='fixed top-0 left-0 flex flex-col'>
        <BsTwitter size={24} color={'#fff'} />
      </div>
      <div className='mt-10'>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.id}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Landing;
