import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import {
  AuthFormStepHeader,
  FormButton,
  FormInputField,
  FormSubtitle,
} from '../../components';
import { EMAIL_VALIDATION, LOGIN_PATH } from '../../constants';
import { IFormValues } from '../../interface';
import { sendPasswordReset } from '../../services';
import { notifyError, notifyInfo } from '../../utils';

const ForgoutPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IFormValues>({
    mode: 'all',
    defaultValues: {
      email: '',
    },
  });

  const formSubmit = async (values: IFormValues) => {
    const { email } = values;
    console.log(email);
    try {
      const result = await sendPasswordReset(email);
      notifyInfo('Check your email');
      navigate(`${LOGIN_PATH}`, {
        replace: true,
      });
    } catch (error: any) {
      let msg = '';
      if (error.message === 'auth/user-not-found') {
        msg = 'Email not found.';
      } else {
        msg = 'An Error has occured, try again.';
      }
      notifyError(msg);
    }
  };

  return (
    <div className='w-full h-full bg-t-dark-gray flex md:items-center md:justify-center'>
      <div className='w-full bg-white dark:bg-t-black  h-full flex flex-col md:rounded-2xl md:h-[650px] md:w-[600px]'>
        {/* HEADER CARD */}
        <AuthFormStepHeader
          step={0}
          iconAction={
            <AiOutlineClose size={20} className='text-black dark:text-white' />
          }
          callback={() => navigate(-1)}
        />

        <div className='px-8 w-full flex-1 flex flex-col'>
          <form
            className='flex-1 flex flex-col'
            onSubmit={handleSubmit(formSubmit)}
          >
            <FormSubtitle subtitle='Reset your password' />
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

            <FormButton disabled={!isValid} text='Submit' type='submit' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgoutPassword;
