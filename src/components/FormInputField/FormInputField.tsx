import { type } from 'os';
import React from 'react';
import { UseFormRegister, Path, FieldErrors } from 'react-hook-form';
import { IFormValues } from '../../interface';

type FormInputFieldProps = {
  type: string;
  register: UseFormRegister<IFormValues>;
  label: Path<IFormValues>;
  placeholder: string;
  errors: FieldErrors<IFormValues>;
  rules: any;
};

const FormInputField = ({
  type,
  register,
  label,
  placeholder,
  errors,
  rules,
}: FormInputFieldProps) => {
  return (
    <div className='relative w-full my-4'>
      <input
        type={type}
        {...register(label, {
          ...rules,
        })}
        placeholder={placeholder}
        className={`peer h-[56px] w-full bg-transparent rounded-lg text-white text-lg border border-[rgb(83,100,113)] pt-3 focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] placeholder-transparent ${
          errors[`${label}`]
            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
            : ''
        }`}
      />
      <label
        className={`text-sm text-[rgb(83,100,113)] absolute top-0 left-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[rgb(83,100,113)] peer-placeholder-shown:top-3.5 peer-focus:top-0 peer-focus:left-3.5 peer-focus:text-[#1d9bf0] peer-focus:text-sm transition-all ${
          errors[`${label}`] ? 'text-red-500  peer-focus:text-red-500' : ''
        }`}
      >
        {placeholder}
      </label>
      {errors && errors[`${label}`] && (
        <div className='mt-1 ml-2'>
          <p className='text-red-600 text-xs font-extralight'>
            {errors[`${label}`]!.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormInputField;
