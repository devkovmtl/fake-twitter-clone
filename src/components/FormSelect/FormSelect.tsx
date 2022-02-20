import React from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { IFormValues } from '../../interface';

type FormSelectProps = {
  register: UseFormRegister<IFormValues>;
  label: Path<IFormValues>;
  rules: any;
  title: string;
  children: JSX.Element[];
};

const FormSelect = ({
  register,
  label,
  rules,
  title,
  children,
}: FormSelectProps) => {
  return (
    <>
      <select
        id={label}
        {...register(label, { ...rules })}
        className='peer h-[56px] w-full bg-transparent rounded-lg text-black dark:text-white text-lg border border-[rgb(83,100,113)] pt-3 focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] placeholder-transparent '
      >
        {children}
      </select>
      <label className='text-sm text-[rgb(83,100,113)] absolute top-0 left-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[rgb(83,100,113)] peer-placeholder-shown:top-3.5 peer-focus:top-0 peer-focus:left-3.5 peer-focus:text-[#1d9bf0] peer-focus:text-sm transition-all'>
        {title}
      </label>
    </>
  );
};

export default FormSelect;
