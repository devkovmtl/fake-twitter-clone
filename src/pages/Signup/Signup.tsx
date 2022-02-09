import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm, SubmitHandler, Path, UseFormRegister } from 'react-hook-form';
import { EMAIL_VALIDATION } from '../../constants';

interface IFormValues {
  Name: String;
  Email: String;
}

type InputFieldProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  placeholder: string;
  rules: any;
  name: string;
  errors: any;
};

const InputField = ({
  register,
  label,
  placeholder,
  rules,
  name,
  errors,
}: InputFieldProps) => {
  return (
    <>
      <input
        {...register(label, { ...rules })}
        placeholder={placeholder}
        name={name}
      />
      {errors[label] && errors[label].type === 'required' && (
        <p className='mb-3 text-red-500 text-left'>{name} is required</p>
      )}
      {errors[label] && errors[label].type === 'maxLength' && (
        <p className='mb-3 text-red-500 text-left'>
          {name} should be have maximum of {rules.maxLength} characters
        </p>
      )}
      {errors[label] && errors[label].type === 'minLength' && (
        <p className='mb-3 text-red-500 text-left'>
          {name} should be contain atleast {rules.minLength} characters
        </p>
      )}
      {errors[label] && errors[label].type === 'pattern' && (
        <p className='mb-3 text-red-500 text-left'>{name} is invalid</p>
      )}
    </>
  );
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      Name: '',
      Email: '',
    },
  });

  console.log(errors);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className='w-full h-full bg-[#5a7082] flex items-center justify-center'>
      <div className='bg-black rounded-2xl h-[650px] min-h-[400px] max-h-[90vh] min-w-[600px] max-w-[80vw]'>
        <div className='flex h-14 items-center px-4'>
          <button className='rounded-full w-9 h-9 flex items-center justify-center hover:bg-[#EFEFF4] hover:bg-opacity-10 transition-all'>
            <AiOutlineClose size={20} color={'#fff'} />
          </button>
          <span className='flex-1'></span>
          <div>
            <BsTwitter size={32} color={'#fff'} />
          </div>
          <span className='flex-1'></span>
        </div>
        <div className='mx-8 w-full flex flex-col'>
          <h2 className='text-white text-2xl my-5 font-bold leading-6  break-words'>
            Create your account
          </h2>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
              <InputField
                name='name'
                placeholder='Name'
                label='Name'
                register={register}
                rules={{ required: true, minLength: 3, maxLength: 50 }}
                errors={errors}
              />

              <InputField
                name='email'
                placeholder='Email'
                label='Email'
                register={register}
                rules={{ required: true, pattern: EMAIL_VALIDATION }}
                errors={errors}
              />

              <input type='submit' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
