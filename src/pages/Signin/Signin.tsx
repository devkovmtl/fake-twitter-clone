import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-full bg-[#5a7082] flex md:items-center md:justify-center'>
      <div className='bg-black w-full h-full flex flex-col md:rounded-2xl md:h-[650px] md:w-[600px]'>
        <div className='h-[53px] text-white flex items-center px-4'>
          <button
            onClick={() => navigate(-1)}
            className='rounded-full w-9 h-9 flex items-center justify-center hover:bg-[#EFEFF4] hover:bg-opacity-10 transition-all'
          >
            <AiOutlineClose size={20} color={'#fff'} />
          </button>
          <span className='flex-1'></span>
          <div>
            <BsTwitter size={32} color={'#fff'} />
          </div>
          <span className='flex-1'></span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
