import React from 'react';

type OptionProps = {
  disabled: boolean;
  value: number | undefined;
  children?: string | number;
};

function Option({ disabled, value, children }: OptionProps) {
  return (
    <option
      disabled={disabled}
      value={value}
      className='bg-white text-black dark:bg-black dark:text-white'
    >
      {children}
    </option>
  );
}

export default Option;
