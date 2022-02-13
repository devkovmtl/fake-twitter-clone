import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { BiChevronLeft } from 'react-icons/bi';
import { useForm } from 'react-hook-form';

import {
  EMAIL_VALIDATION,
  HOME_PATH,
  notifyError,
  notifyInfo,
  PASSWORD_VALIDATION,
} from '../../constants';
import {
  FormSubtitle,
  FormButton,
  FormInputField,
  FormSelect,
} from '../../components';
import {
  buildDayOptions,
  buildMonthOptions,
  buildYearOptions,
} from './buildSelectOptions';
import { IFormValues } from '../../interface';
import {
  addUser,
  doesUserExist,
  signUpWithEmailPassword,
} from '../../services';

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
      tracking: true,
      agreePolicy: false,
    },
  });

  // we watch the month and year field
  // to update the days number depending on month and year
  const watchFields = watch(['month', 'year', 'password', 'email']);

  const completeFormStep = async () => {
    const email = watchFields[3];
    if (formStep === 0) {
      const userExist = await doesUserExist(email);
      if (userExist) {
        notifyError('Email already taken');

        return;
      } else {
        setFormStep((currentFormStep) => currentFormStep + 1);
      }
    } else {
      setFormStep((currentFormStep) => currentFormStep + 1);
    }
  };

  const submitForm = async (values: IFormValues) => {
    const { name, email, year, month, day, password, tracking, agreePolicy } =
      values;
    const birthDate = new Date(year!, month!, day!);

    // register
    try {
      const result = await signUpWithEmailPassword(
        name,
        email,
        password,
        birthDate
      );
      const user = {
        ...result,
        name,
        username: name,
        birthDate,
        tracking,
        agreePolicy,
        createdAt: Date(),
      };

      await addUser(user);
      navigate(HOME_PATH);
      notifyInfo('Account Created!');
    } catch (error) {
      notifyError('Sorry, an error has occured please try again.');
    }
  };

  const renderButton = () => {
    if (formStep > 2) {
      return null;
    } else if (formStep === 2) {
      return (
        <FormButton
          type='button'
          disabled={!isValid}
          text='Sign up'
          onClick={() => handleSubmit(submitForm)()}
        />
      );
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
              <p className='text-lg text-white'>Step {formStep + 1} of 3</p>
              <span className='flex-1'></span>
            </>
          )}
        </div>

        {/* FORM*/}
        <div className='px-8 w-full flex-1 flex flex-col'>
          <form className='flex-1 flex flex-col'>
            {formStep >= 0 && (
              <section className={formStep === 0 ? 'block' : 'hidden'}>
                <FormSubtitle subtitle='Create your account' />
                <FormInputField
                  type='text'
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
                  type='email'
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
                    <FormSelect
                      register={register}
                      label='month'
                      rules={{
                        required: true,
                      }}
                      title='Month'
                      children={buildMonthOptions()}
                    />
                  </div>
                  {/* DAY SELECT */}
                  <div className='relative h-[56px] col-span-2 min-h-full'>
                    <FormSelect
                      register={register}
                      label='day'
                      rules={{ required: true }}
                      title='Day'
                      children={buildDayOptions(
                        +watchFields[0]!,
                        +watchFields[1]!
                      )}
                    />
                  </div>
                  {/* YEAR SELECT */}
                  <div className='relative h-[56px] col-span-2 min-h-full'>
                    <FormSelect
                      register={register}
                      label='year'
                      rules={{ required: true }}
                      title='Year'
                      children={buildYearOptions()}
                    />
                  </div>
                </div>
              </section>
            )}

            {formStep === 1 && (
              <section className={formStep === 1 ? 'block' : 'hidden'}>
                <FormSubtitle subtitle='Create your password' />

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
                    pattern: {
                      value: PASSWORD_VALIDATION,
                      message:
                        'Password 8 minimum characters, one uppercase, one lowercase and one digit.',
                    },
                  }}
                />

                <FormInputField
                  type='password'
                  register={register}
                  label='confirmPassword'
                  placeholder='Confirm Password'
                  errors={errors}
                  rules={{
                    required: {
                      value: true,
                      message: 'Confirm your Password',
                    },
                    validate: (value: string) =>
                      value === watchFields[2] || "Password don't match",
                  }}
                />

                <h3 className='font-bold text-lg text-white mt-8'>
                  Track where you see FakeTwitter content accross the web
                </h3>

                <div className='mt-3 flex justify-between items-center'>
                  <label className='font-normal text-sm text-white pr-4'>
                    Twitter uses this data to personlize your experience. This
                    web browsing history will never be stored with your name,
                    email or phone number.
                  </label>
                  <input
                    type='checkbox'
                    className='h-6 w-6 rounded-sm outline-none'
                    {...register('tracking')}
                  />
                </div>

                <p className='mt-10 text-sm font-normal text-[rgb(110,118,125)]'>
                  By signing up, you agree to our{' '}
                  <span className='text-blue-400'>Terms</span>,{' '}
                  <span className='text-blue-400'>Privacy Policy</span>, and{' '}
                  <span className='text-blue-400'>Cookie Use</span>. FakeTwitter
                  may use your contact information, including your email address
                  and phone number for purposes outlined in our Privacy Policy.
                </p>
              </section>
            )}

            {formStep === 2 && (
              <section className={formStep === 2 ? 'block' : 'hidden'}>
                <FormSubtitle subtitle='Create your account' />
                <div className='mt-10 flex justify-start items-start'>
                  <input
                    type='checkbox'
                    className='h-6 w-6 rounded-sm outline-none mr-3 '
                    {...register('agreePolicy', { required: true })}
                  />
                  <span className='text-base font-normal text-white'>
                    I accept the{' '}
                    <a className='text-blue-400 ' href='/'>
                      Terms and Conditions
                    </a>
                    .
                  </span>
                </div>
                <p className='mt-10 text-base font-normal text-white'>
                  By signing up, you agree to our{' '}
                  <span className='text-blue-400'>Terms</span>,{' '}
                  <span className='text-blue-400'>Privacy Policy</span>, and{' '}
                  <span className='text-blue-400'>Cookie Use</span>. FakeTwitter
                  may use your contact information, including your email address
                  and phone number for purposes outlined in our Privacy Policy,
                  like keeping your account secure and personlizing our
                  services, including ads.{' '}
                  <span className='text-blue-400'>Learn more.</span> Others will
                  be able to find you by email or phone number, when provided,
                  unless you choose otherwise{' '}
                  <span className='text-blue-400'>here</span>.
                </p>
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
