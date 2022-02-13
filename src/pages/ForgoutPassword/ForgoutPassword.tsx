import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { FormButton, FormInputField, FormSubtitle } from '../../components';
import { EMAIL_VALIDATION } from '../../constants';
import { IFormValues } from '../../interface';

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

  const formSubmit = (values: IFormValues) => {
    const { email } = values;
    console.log(email);
  };

  return (
    <div className='w-full h-full bg-[#5a7082] flex md:items-center md:justify-center'>
      <div className='bg-black w-full h-full flex flex-col md:rounded-2xl md:h-[650px] md:w-[600px]'>
        {/* HEADER CARD */}
        <div className='h-[53px] text-white flex items-center px-4'>
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
        </div>

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

            <FormButton disabled={true} text='Submit' type='submit' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgoutPassword;
