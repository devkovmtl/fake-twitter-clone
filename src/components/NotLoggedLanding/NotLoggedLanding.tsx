import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const NotLoggedLading = () => {
  return (
    <div className='flex flex-col sm:flex-row h-full w-full'>
      <div className='bg-[#1DA1F2] flex items-center justify-center w-full sm:w-[100%] sm:h-full'>
        <BsTwitter size={275} color={'#fff'} />
      </div>

      <div className='bg-black w-full min-w-[45vw] justify-center p-8'>
        <BsTwitter
          size={48}
          color={'#fff'}
          className='pb-3 h-12 flex items-start'
        />

        <h1 className='text-white text-6xl font-bold leading-10 tracking-tighter my-12 break-words'>
          Happening now
        </h1>

        <h2 className='text-white text-3xl mb-8 font-bold leading-6  break-words'>
          Join Twitter today.
        </h2>

        <div className='flex flex-col'>
          <button className='btn-landing '>
            <FcGoogle size={20} className='mr-2' />
            Sign up with Google
          </button>
          <button className='btn-landing '>
            <FaApple size={22} className='mr-2' />
            Sign up with Apple
          </button>

          <div className='relative flex py-2 items-center w-[300px]'>
            <div className='flex-grow border-t border-gray-400'></div>
            <span className='flex-shrink mx-4 text-white'>or</span>
            <div className='flex-grow border-t border-gray-400'></div>
          </div>
          <div className='w-[300px]'>
            <button className='btn-landing bg-[#1DA1F2] text-white text-base hover:bg-[#1a8cd8] transition-all'>
              Sign up with Email
            </button>
            <p className='text-gray-200 opacity-60 text-xs'>
              By signing up, you agree to the{' '}
              <span className='text-[#1DA1F2] opacity-80'>
                Terms of Service
              </span>{' '}
              and{' '}
              <span className='text-[#1DA1F2] opacity-80'>Privacy Policy</span>,
              including{' '}
              <span className='text-[#1DA1F2]opacity-80'>Cookie Use</span>.
            </p>
          </div>
          <div className='w-[300px] mt-11'>
            <p className='text-white text-xl font-bold mb-5'>
              Already have an account ?
            </p>
            <button className='btn-landing bg-transparent border-2 border-[#536471] text-[#1DA1F2] text-base hover:bg-[#1d9bf0] hover:bg-opacity-5 transition-all'>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedLading;
