import React from 'react';

type FormButtonProps = {
  type: 'submit' | 'button';
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
};
const FormButton = ({ type, disabled, onClick, text }: FormButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className='h-[44px] w-full rounded-full text-white dark:text-black px-6 border font-bold text-base cursor-pointer bg-black hover:bg-black/80 dark:bg-[rgb(239,243,244)] dark:hover:bg-[rgb(215,219,220)] disabled:bg-[rgb(120,122,122)] disabled:border-[rgb(120,122,122)] outline-none transition-all'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FormButton;
