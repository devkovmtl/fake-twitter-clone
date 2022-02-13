import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BiChevronLeft } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import {
  EMAIL_VALIDATION,
  PASSWORD_RESET_PATH,
  SIGNUP_PATH,
} from '../../constants';
import { IFormValues } from '../../interface';
import { FormButton, FormInputField } from '../../components';
import { loginWithEmailPassword } from '../../services';

const Signin = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);

  const {
    register,
    watch,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IFormValues>({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const email = watch('email');

  const completeFormStep = () => {
    if (!email || !isValid) {
      return;
    }
    console.log(email);
    setFormStep((currentFormStep) => currentFormStep + 1);
  };

  const submitForm = async (values: IFormValues) => {
    const { email, password } = values;

    console.log('Submit ', email, password);
    try {
      const result = await loginWithEmailPassword(email, password);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full h-full bg-[#5a7082] flex md:items-center md:justify-center'>
      <div className='bg-black w-full h-full flex flex-col md:rounded-2xl md:h-[650px] md:w-[600px]'>
        <div className='h-[53px] text-white flex items-center px-4'>
          {formStep === 0 && (
            <>
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
            </>
          )}

          {formStep > 0 && (
            <>
              <button
                onClick={() => setFormStep((current) => current - 1)}
                className='rounded-full w-9 h-9 flex items-center justify-center hover:bg-[#EFEFF4] hover:bg-opacity-10 transition-all'
              >
                <BiChevronLeft size={20} color={'#fff'} />
              </button>
              <span className='flex-1'></span>
              <div>
                <BsTwitter size={32} color={'#fff'} />
              </div>
              <span className='flex-1'></span>
            </>
          )}
        </div>

        <div className='px-8 w-full flex-1 flex flex-col justify-center'>
          <div className='flex flex-col w-[364px] mx-auto pb-12 px-8'>
            <form>
              {formStep >= 0 && (
                <section className={formStep === 0 ? 'block' : 'hidden'}>
                  <div className='h-[56px]'>
                    <h1 className='text-white text-2xl font-bold my-4'>
                      Sign in to Twitter
                    </h1>
                  </div>
                  <button className='btn-landing mt-10'>
                    <FcGoogle size={20} className='mr-2' />
                    Sign up with Google
                  </button>
                  {/* <button className='btn-landing mt-5'>
                    <FaApple size={22} className='mr-2' />
                    Sign up with Apple
                  </button> */}

                  <div className='relative flex py-2 items-center w-[300px]'>
                    <div className='flex-grow border-t border-gray-400'></div>
                    <span className='flex-shrink mx-4 text-white'>or</span>
                    <div className='flex-grow border-t border-gray-400'></div>
                  </div>

                  <FormInputField
                    type='email'
                    register={register}
                    label='email'
                    placeholder='Email'
                    errors={errors}
                    rules={{
                      pattern: {
                        value: EMAIL_VALIDATION,
                        message: 'Please enter a valid email.',
                      },
                    }}
                  />

                  <button
                    type='button'
                    onClick={completeFormStep}
                    className='btn-landing  text-black font-bold hover:bg-gray-200 mt-5  transition-all'
                  >
                    Next
                  </button>

                  <button
                    type='button'
                    onClick={() => navigate(`/${PASSWORD_RESET_PATH}`)}
                    className='btn-landing bg-transparent border-2 border-[#536471] text-white text-base hover:bg-[#536471] hover:bg-opacity-5 transition-all mt-5'
                  >
                    Forgot Password?
                  </button>

                  <p className='text-base font-normal text-[rgb(110,118,125)] mt-10'>
                    Don't have an account?{' '}
                    <span
                      className='text-blue-400 hover:cursor-pointer'
                      onClick={() => navigate(`/${SIGNUP_PATH}`)}
                    >
                      Sign up
                    </span>
                  </p>
                </section>
              )}
              {formStep === 1 && (
                <>
                  <section className={formStep === 1 ? 'block' : 'hidden'}>
                    <div className='h-[56px]'>
                      <h1 className='text-white text-2xl font-bold my-4'>
                        Enter your password
                      </h1>
                    </div>
                    <div className='h-[56px] py-3 bg-[rgb(32,35,39)] border-[rgb(32,35,39)] rounded-md flex items-center pl-3'>
                      <p className='text-[rgb(217,217,217)]'>{email}</p>
                    </div>
                    <FormInputField
                      type='password'
                      register={register}
                      label='password'
                      placeholder='Password'
                      errors={errors}
                      rules={{
                        required: {
                          value: true,
                          message: 'Password is required',
                        },
                      }}
                    />

                    <div
                      className='text-blue-400 hover:cursor-pointer hover:underline'
                      onClick={() => navigate(`/${PASSWORD_RESET_PATH}`)}
                    >
                      Forgout password?
                    </div>
                  </section>
                  <div className='mt-12 mb-9 w-full'>
                    <FormButton
                      type='button'
                      disabled={!isValid}
                      text='Log In'
                      onClick={() => handleSubmit(submitForm)()}
                    />
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
