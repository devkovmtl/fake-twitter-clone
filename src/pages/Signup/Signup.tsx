import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { EMAIL_VALIDATION } from '../../constants';
import { FormSubtitle, FormButton, FormInputField } from '../../components';
import {
  buildDayOptions,
  buildMonthOptions,
  buildYearOptions,
} from './buildSelectOptions';
import { IFormValues } from '../../interface';

const Signup = () => {
  const [formStep, setFormStep] = useState(0);
  const navigate = useNavigate();
  const {
    watch,
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IFormValues>({
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

  const submitForm = (values: IFormValues): void => {
    const { name, email, year, month, day } = values;
    const birthDate = new Date(year!, month!, day!);
    const user = {
      name,
      email,
      birthDate,
    };
    console.log(user);
  };

  const completeFormStep = () => {
    setFormStep((currentFormStep) => currentFormStep + 1);
  };

  const renderButton = () => {
    console.log('Form Step ', formStep);
    if (formStep > 2) {
      return null;
    } else if (formStep === 2) {
      return <FormButton type='submit' disabled={!isValid} text='Sign up' />;
    } else {
      return (
        <FormButton
          type='button'
          disabled={!isValid}
          onClick={completeFormStep}
          text='Next'
        />
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
                <FormInputField
                  register={register}
                  label='name'
                  placeholder='Name'
                  errors={errors}
                  rules={{
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
                  }}
                />

                <FormInputField
                  register={register}
                  label='email'
                  placeholder='Email'
                  errors={errors}
                  rules={{
                    required: {
                      value: true,
                      message: 'Please enter a valid email.',
                    },
                    pattern: {
                      value: EMAIL_VALIDATION,
                      message: 'Please enter a valid email.',
                    },
                  }}
                />

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
                      {buildDayOptions(+watchFields[0]!, +watchFields[1]!)}
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
