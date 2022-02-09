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
    <div className='relative w-full'>
      <input
        id={label}
        {...register(label, { ...rules })}
        placeholder={placeholder}
        name={name}
        className='peer h-[56px] w-full text-white text-lg border border-[rgb(83,100,113)] bg-transparent mt-4 px-3 py-2 rounded-lg 
        placeholder-transparent
        focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0]'
      />
      <label
        htmlFor={label}
        className='text-sm text-[#1d9bf0] absolute 
        left-3.5 top-5 peer-placeholder-shown:text-lg
        peer-placeholder-shown:text-[rgb(83,100,113)]
        peer-placeholder-shown:top-8 transition-all
        peer-focus:left-3.5 peer-focus:top-4 peer-focus:text-sm'
      >
        {label}
      </label>
    </div>
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
        <div className='px-8 w-full flex flex-col'>
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

              <div className='text-white mt-9'>
                <h3 className='font-bold text-base'>Date of birth</h3>
                <p className='text-xs font-normal text-[rgb(110,118,125)]'>
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet or something else.
                </p>
              </div>

              <div></div>

              <input type='submit' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
