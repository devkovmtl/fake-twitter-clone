import React, { useContext, useState } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { BiHomeCircle, BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH } from '../../constants';
import { UserContext } from '../../context';
import { logout } from '../../services';
import { Modal } from '../../components';

const Landing = () => {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='bg-black h-full w-full text-white flex flex-row'>
      <div className='bg-black w-[68px] h-full flex flex-col items-center justify-between px-1 border-r border-r-[rgb(110,118,125)]'>
        <button
          className='h-12 w-12 rounded-full hover:bg-[rgba(28,155,240,0.1)] flex items-center justify-center'
          onClick={() => navigate(HOME_PATH)}
        >
          <BsTwitter size={24} color={'#fff'} />
        </button>

        <div className='mt-1 mb-2'>
          <nav className='space-y-1'>
            <a
              href={HOME_PATH}
              className='h-12 w-12 rounded-full hover:bg-[rgba(28,155,240,0.1)] flex items-center justify-center'
            >
              <BiHomeCircle size={24} color={'#fff'} />
            </a>

            <a
              href={HOME_PATH}
              className='h-12 w-12 rounded-full hover:bg-[rgba(28,155,240,0.1)] flex items-center justify-center'
            >
              <BiSearch size={24} color={'#fff'} />
            </a>
          </nav>
        </div>

        <span className='flex-1'></span>
      </div>
      <div className='flex-1'>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.id}</p>
        <button onClick={logout}>Logout</button>

        <button
          onClick={openModal}
          className='bg-blue-500 px-7 py-4 rounded-3xl'
        >
          Tweet
        </button>

        <Modal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default Landing;
