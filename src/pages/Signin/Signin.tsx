import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// Icons
import { AiOutlineClose } from 'react-icons/ai';

import { BiChevronLeft } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';

import {
  addUser,
  doesUserExist,
  loginWithEmailPassword,
  signInWithGoogle,
} from '../../services';
import {
  AuthFormButton,
  AuthFormSeparator,
  AuthFormStepHeader,
  AuthFormTitleHeader,
  FormButton,
  FormInputField,
} from '../../components';
import {
  EMAIL_VALIDATION,
  HOME_PATH,
  PASSWORD_RESET_PATH,
  REGISTER_PATH,
} from '../../constants';
import { notifyError } from '../../utils';
import { IFormValues } from '../../interface';

const Signin = () => {
  const [formStep, setFormStep] = useState(0);
  const navigate = useNavigate();

  const logInWithGoogle = async () => {
    try {
      const user = await signInWithGoogle();
      if (user.email) {
        const userExist = await doesUserExist(user.email);
        if (!userExist) {
          // add user to db
          await addUser(user);
        }
      }
      navigate(HOME_PATH);
    } catch (error: any) {
      notifyError('An error has occurred please try again.');
    }
  };

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

  const completeFormStep = async () => {
    if (!email || !isValid) {
      return;
    }
    if (formStep === 0) {
      const userExist = await doesUserExist(email);
      if (!userExist) {
        notifyError('Email Not Found');
        return;
      } else {
        setFormStep((currentFormStep) => currentFormStep + 1);
      }
    } else {
      setFormStep((currentFormStep) => currentFormStep + 1);
    }
  };

  const submitForm = async (values: IFormValues) => {
    const { email, password } = values;

    try {
      const result = await loginWithEmailPassword(email, password);
      console.log(result);
      navigate(HOME_PATH);
    } catch (error: any) {
      if (error.message === 'auth/wrong-password') {
        notifyError('Invalid Password');
      } else if (error.message === 'auth/too-many-requests') {
        notifyError('Too many requests, try again later.');
      } else {
        notifyError('An error has occurred please try again.');
      }
    }
  };

  return (
    <div className='w-full h-full bg-t-dark-gray flex md:items-center md:justify-center'>
      <div className='w-full bg-white dark:bg-t-black  h-full flex flex-col md:rounded-2xl md:h-[650px] md:w-[600px]'>
        {formStep === 0 && (
          <AuthFormStepHeader
            step={0}
            iconAction={
              <AiOutlineClose
                size={20}
                className='text-black dark:text-white'
              />
            }
            callback={() => navigate(-1)}
          />
        )}
        {formStep > 0 && (
          <AuthFormStepHeader
            step={1}
            iconAction={
              <BiChevronLeft size={20} className='text-black dark:text-white' />
            }
            callback={() => setFormStep((step) => step - 1)}
          />
        )}

        <div className='px-8 w-full flex-1 flex flex-col justify-center'>
          <div className='flex flex-col w-[364px] mx-auto pb-12 px-8'>
            <form>
              {formStep >= 0 && (
                <section className={formStep === 0 ? 'block' : 'hidden'}>
                  <AuthFormTitleHeader title='Sign in to Twitter' />

                  <AuthFormButton
                    type='button'
                    text='Sign in with Google'
                    callback={logInWithGoogle}
                    classNames='btn-auth btn-auth-light'
                    provider='google'
                    icon={<FcGoogle size={20} className='mr-2' />}
                  />

                  <AuthFormSeparator />

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

                  <AuthFormButton
                    type='button'
                    text='Next'
                    callback={completeFormStep}
                    classNames='btn-auth btn-auth-dark'
                  />

                  <AuthFormButton
                    type='button'
                    text='Forgot password?'
                    callback={() =>
                      navigate(`${PASSWORD_RESET_PATH}`, {
                        replace: true,
                      })
                    }
                    classNames='mt-4 btn-auth btn-auth-light-alt'
                  />

                  <p className='text-base font-normal text-[rgb(110,118,125)] mt-10'>
                    Don't have an account?{' '}
                    <span
                      className='text-blue-400 hover:cursor-pointer'
                      onClick={() =>
                        navigate(`${REGISTER_PATH}`, {
                          replace: true,
                        })
                      }
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
                      <h1 className='text-black dark:text-white text-2xl font-bold my-4'>
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
                      onClick={() =>
                        navigate(`${PASSWORD_RESET_PATH}`, {
                          replace: true,
                        })
                      }
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
