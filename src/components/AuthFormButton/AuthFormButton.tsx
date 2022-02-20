import React from 'react';

type ButtonAuthFormProps = {
  text: string;
  callback: () => void;
  type: 'button' | 'submit';
  classNames: string;
  icon?: JSX.Element;
  provider?: string;
};

const ButtonAuthForm = ({
  text,
  callback,
  type = 'button',
  classNames,
  provider = '',
  icon,
}: ButtonAuthFormProps) => {
  return (
    <button
      className={classNames}
      onClick={callback}
      data-provider={provider}
      type={type}
    >
      {icon ? <span className='mr-2'>{icon}</span> : null}
      <span>{text}</span>
    </button>
  );
};

export default ButtonAuthForm;
