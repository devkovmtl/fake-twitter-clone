import React from 'react';
import { BsTwitter } from 'react-icons/bs';

const Landing = () => {
  return (
    <div className='bg-black min-w-[45vw] justify-center p-4'>
      <BsTwitter size={68} color={'#fff'} />
      <h1 className='text-white text-6xl font-bold leading-10 tracking-tighter my-12 break-words'>
        Happening now
      </h1>

      <h2 className='mb-8 leading-6 text-white'>Join Twitter today.</h2>

      <div>
        <button>Sign up with Google</button>
        <div>
          <button>Sign up with Email</button>
          <p>
            By signing up, you agree to the Terms of Service and privacy Policy,
            including Cookie Use.
          </p>
        </div>
      </div>

      <div>
        <p>Already have an account ?</p>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Landing;
