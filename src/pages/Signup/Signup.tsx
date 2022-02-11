import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm, SubmitHandler, Path, UseFormRegister } from 'react-hook-form';
import { DAYS, EMAIL_VALIDATION, MONTHS } from '../../constants';
import { Option } from '../../components';
import { isLeapYear } from '../../utils';
import FormSubtitle from '../../components/FormSubtittle/FormSubtitle';

const Signup = () => {
  const [formStep, setFormStep] = useState(0);
  const navigate = useNavigate();
  const {
    watch,
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

  // we watch the month and year field
  // to update the days number depending on month and year
  const watchFields = watch(['month', 'year']);

  const submitForm = (values: any): void => {
    console.log(values);
  };

  const buildMonthOptions = () => {
    let options = [];
    options.push(
      <Option key='null-month-key' disabled={true} value={undefined} />
    );
    for (let i = 0; i < 12; i++) {
      options.push(
        <Option
          key={MONTHS[i]}
          disabled={false}
          value={i}
          children={MONTHS[i]}
        />
      );
    }
    return options;
  };

  const buildYearOptions = () => {
    let options = [];
    options.push(
      <Option key='null-month-key' disabled={true} value={undefined} />
    );

    for (let i = 1902; i <= new Date().getFullYear(); i++) {
      options.push(<Option key={i} disabled={false} value={i} children={i} />);
    }

    return options;
  };

  const buildDayOptions = () => {
    const month = watchFields[0];
    const year = watchFields[1];

    let options = [];
    options.push(
      <option key='null-day-key' disabled className='bg-black'></option>
    );
    if (!month) {
      for (let i = 1; i < 32; i++) {
        options.push(
          <option key={i} value={i} className='bg-black'>
            {i}
          </option>
        );
      }
    }
    if (month) {
      if (!year) {
        for (let i = 1; i <= DAYS[+month]; i++) {
          options.push(
            <option key={i} value={i} className='bg-black'>
              {i}
            </option>
          );
        }
      }
      if (year) {
        const isLeap = isLeapYear(+year);
        if (isLeap && +month === 1) {
          for (let i = 1; i <= 29; i++) {
            options.push(
              <option key={i} value={i} className='bg-black'>
                {i}
              </option>
            );
          }
        } else if (!isLeap && +month === 1) {
          for (let i = 1; i <= 28; i++) {
            options.push(
              <option key={i} value={i} className='bg-black'>
                {i}
              </option>
            );
          }
        } else {
          for (let i = 1; i <= DAYS[+month]; i++) {
            options.push(
              <option key={i} value={i} className='bg-black'>
                {i}
              </option>
            );
          }
        }
      }
    }
    return options;
  };

  const completeFormStep = () => {
    setFormStep((currentFormStep) => currentFormStep + 1);
  };

  const renderButton = () => {
    if (formStep > 2) {
      return null;
    } else if (formStep === 2) {
      return (
        <button
          type='submit'
          disabled={!isValid}
          className='h-[44px] w-full rounded-full px-6 border font-bold text-base cursor-pointer bg-[rgb(239,243,244)] hover:bg-[rgb(215,219,220)] disabled:bg-[rgb(120,122,122)] disabled:border-[rgb(120,122,122)] outline-none  transition-all'
        >
          Sign up
        </button>
      );
    } else {
      return (
        <button
          type='button'
          disabled={!isValid}
          className='h-[44px] w-full rounded-full px-6 border font-bold text-base cursor-pointer bg-[rgb(239,243,244)] hover:bg-[rgb(215,219,220)] disabled:bg-[rgb(120,122,122)] disabled:border-[rgb(120,122,122)] outline-none  transition-all'
          onClick={completeFormStep}
        >
          Next
        </button>
      );
    }
  };

  return (
    <div className='w-full h-full bg-[#5a7082] flex md:items-center md:justify-center'>
      <div className='bg-black w-full h-full flex flex-col md:rounded-2xl md:h-[650px] md:w-[600px]'>
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
        <div className='px-8 w-full flex-1 flex flex-col'>
          <form
            className='flex-1 flex flex-col'
            onSubmit={handleSubmit(submitForm)}
          >
            {formStep >= 0 && (
              <section className={formStep === 0 ? 'block' : 'hidden'}>
                <FormSubtitle subtitle='Create your account' />
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
                <div className='text-white mt-14'>
                  <h3 className='font-bold text-base'>Date of birth</h3>
                  <p className='text-xs font-normal text-[rgb(110,118,125)]'>
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet or something else.
                  </p>
                </div>

                <div className='h-[56px] w-full grid grid-cols-7 gap-3 mt-4'>
                  {/* MONTH SELECT */}
                  <div className='relative h-[56px] col-span-3 min-h-full'>
                    <select
                      id='month'
                      {...register('month', { required: true })}
                      className='peer h-[56px] w-full bg-transparent rounded-lg text-white text-lg border border-[rgb(83,100,113)] pt-3 focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] placeholder-transparent '
                    >
                      {buildMonthOptions()}
                    </select>
                    <label
                      htmlFor='month'
                      className='text-sm text-[rgb(83,100,113)] absolute top-0 left-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[rgb(83,100,113)] peer-placeholder-shown:top-3.5 peer-focus:top-0 peer-focus:left-3.5 peer-focus:text-[#1d9bf0] peer-focus:text-sm transition-all'
                    >
                      Month
                    </label>
                  </div>
                  {/* DAY SELECT */}
                  <div className='relative h-[56px] col-span-2 min-h-full'>
                    <select
                      id='day'
                      {...register('day', { required: true })}
                      className='peer h-[56px] w-full bg-transparent rounded-lg text-white text-lg border border-[rgb(83,100,113)] pt-3 focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] placeholder-transparent '
                    >
                      {buildDayOptions()}
                    </select>
                    <label
                      htmlFor='day'
                      className='text-sm text-[rgb(83,100,113)] absolute top-0 left-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[rgb(83,100,113)] peer-placeholder-shown:top-3.5 peer-focus:top-0 peer-focus:left-3.5 peer-focus:text-[#1d9bf0] peer-focus:text-sm transition-all'
                    >
                      Day
                    </label>
                  </div>
                  {/* YEAR SELECT */}
                  <div className='relative h-[56px] col-span-2 min-h-full'>
                    <select
                      id='year'
                      {...register('year', { required: true })}
                      className='peer h-[56px] w-full bg-transparent rounded-lg text-white text-lg border border-[rgb(83,100,113)] pt-3 focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] placeholder-transparent '
                    >
                      {buildYearOptions().reverse()}
                    </select>
                    <label
                      htmlFor='year'
                      className='text-sm text-[rgb(83,100,113)] absolute top-0 left-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[rgb(83,100,113)] peer-placeholder-shown:top-3.5 peer-focus:top-0 peer-focus:left-3.5 peer-focus:text-[#1d9bf0] peer-focus:text-sm transition-all'
                    >
                      Year
                    </label>
                  </div>
                </div>
              </section>
            )}

            {formStep >= 1 && (
              <section>
                <FormSubtitle subtitle='Customize your experience' />
              </section>
            )}

            <div className='mt-auto mb-9 w-full'>{renderButton()}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
