import React, { useContext } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { REGISTER_PATH, LOGIN_PATH, HOME_PATH } from '../../constants';
import { UserContext } from '../../context';
import { addUser, doesUserExist, signInWithGoogle } from '../../services';
import { notifyError } from '../../utils';
import { AuthFormButton, AuthFormSeparator } from '../../components';

const NotLoggedLading = () => {
  const navigate = useNavigate();
  const logInWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      if (result.email) {
        const userExist = await doesUserExist(result.email);
      }
      navigate(HOME_PATH);
    } catch (error: any) {
      notifyError('An error has occurred please try again.');
    }
  };

  return (
    <div className='flex flex-col sm:flex-row h-full w-full'>
      <div className='bg-[#1DA1F2] flex items-center justify-center w-full sm:w-[100%] sm:h-full'>
        <BsTwitter size={275} color={'#fff'} />
      </div>

      <div className='bg-white dark:bg-black w-full min-w-[45vw] justify-center p-8'>
        <BsTwitter
          size={48}
          color={'#1DA1F2'}
          className='pb-3 h-12 flex items-start'
        />

        <h1 className='text-black dark:text-white text-6xl font-bold leading-10 tracking-tighter my-12 break-words'>
          Happening now
        </h1>

        <h2 className='text-black dark:text-white text-3xl mb-8 font-bold leading-6  break-words'>
          Join Twitter today.
        </h2>

        <div className='flex flex-col'>
          <AuthFormButton
            type='button'
            text='Sign up with Google'
            callback={logInWithGoogle}
            classNames='btn-auth btn-auth-light mt-2'
            icon={<FcGoogle size={20} />}
          />
          <AuthFormSeparator />

          <div className='w-[300px]'>
            <AuthFormButton
              type='button'
              text='Sign up with Email'
              callback={() => navigate(REGISTER_PATH)}
              classNames='btn-auth bg-[#1DA1F2] text-white text-base hover:bg-[#1a8cd8] transition-all mt-2'
            />

            <p className='text-t-dark-gray dark:text-gray-200  text-xs mt-2'>
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
            <p className='text-black dark:text-white text-xl font-bold mb-5'>
              Already have an account ?
            </p>

            <AuthFormButton
              type='button'
              text='Sign in'
              callback={() => navigate(LOGIN_PATH)}
              classNames='btn-auth bg-transparent border border-[#536471] text-[#1DA1F2] text-base hover:bg-[#1d9bf0] hover:bg-opacity-5 transition-all'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedLading;
