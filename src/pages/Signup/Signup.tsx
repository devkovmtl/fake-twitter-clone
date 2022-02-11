import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm, SubmitHandler, Path, UseFormRegister } from 'react-hook-form';
import { EMAIL_VALIDATION } from '../../constants';

const formTitle = 'Create your account';

const Signup = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      month: null,
      day: null,
      year: null,
    },
  });

  const submitForm = (values: any): void => {
    console.log(values);
  };

  return (
    <div className='w-full h-full bg-[#5a7082] flex md:items-center md:justify-center'>
      <div className='bg-black w-full h-full md:rounded-2xl md:h-[650px] md:w-[600px]'>
        {/* HEADER CARD */}
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

        {/* FORM*/}
        <div className='px-8 w-full flex flex-col'>
          <h2 className='text-white text-2xl my-5 font-bold leading-6  break-words'>
            {formTitle}
          </h2>

          <div>
            <form className='flex flex-col' onSubmit={handleSubmit(submitForm)}>
              <section>
                <div className='relative w-full my-4'>
                  <input
                    type='text'
                    {...register('name', {
                      required: {
                        value: true,
                        message: "What's your name?",
                      },
                      min: {
                        value: 3,
                        message: 'Name must have a minimum of 3 characters.',
                      },
                      maxLength: {
                        value: 50,
                        message: 'Name must have a maximum of 50 characters.',
                      },
                    })}
                    placeholder='Name'
                    className={`peer h-[56px] w-full bg-transparent rounded-lg text-white text-lg border border-[rgb(83,100,113)] pt-3 focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] placeholder-transparent ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : ''
                    }`}
                  />
                  <label
                    className={`text-sm text-[rgb(83,100,113)] absolute top-0 left-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[rgb(83,100,113)] peer-placeholder-shown:top-3.5 peer-focus:top-0 peer-focus:left-3.5 peer-focus:text-[#1d9bf0] peer-focus:text-sm transition-all ${
                      errors.name ? 'text-red-500  peer-focus:text-red-500' : ''
                    }`}
                  >
                    Name
                  </label>
                  {errors && errors.name && (
                    <div className='mt-1 ml-2'>
                      <p className='text-red-600 text-xs font-extralight'>
                        {errors.name.message}
                      </p>
                    </div>
                  )}
                </div>
                <div className='relative w-full my-4'>
                  <input
                    type='email'
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Please enter a valid email.',
                      },
                      pattern: {
                        value: EMAIL_VALIDATION,
                        message: 'Please enter a valid email.',
                      },
                    })}
                    placeholder='Email'
                    className={`peer h-[56px] w-full bg-transparent rounded-lg text-white text-lg border border-[rgb(83,100,113)] pt-3 focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] placeholder-transparent ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : ''
                    }`}
                  />
                  <label
                    className={`text-sm text-[rgb(83,100,113)] absolute top-0 left-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[rgb(83,100,113)] peer-placeholder-shown:top-3.5 peer-focus:top-0 peer-focus:left-3.5 peer-focus:text-[#1d9bf0] peer-focus:text-sm transition-all ${
                      errors.email
                        ? 'text-red-500  peer-focus:text-red-500'
                        : ''
                    }`}
                  >
                    Email
                  </label>
                  {errors && errors.email && (
                    <div className='mt-1 ml-2'>
                      <p className='text-red-600 text-xs font-extralight'>
                        Please enter a valid email.
                      </p>
                    </div>
                  )}
                </div>
                <div className='text-white mt-9'>
                  <h3 className='font-bold text-base'>Date of birth</h3>
                  <p className='text-xs font-normal text-[rgb(110,118,125)]'>
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet or something else.
                  </p>
                </div>
              </section>

              <div className='mt-3 mb-9 w-full'>
                <button
                  type='button'
                  disabled={!isValid}
                  className='h-[44px] w-full rounded-full px-6 border font-bold text-base cursor-pointer bg-[rgb(239,243,244)] hover:bg-[rgb(215,219,220)] disabled:bg-[rgb(120,122,122)] disabled:border-[rgb(120,122,122)] outline-none  transition-all'
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
