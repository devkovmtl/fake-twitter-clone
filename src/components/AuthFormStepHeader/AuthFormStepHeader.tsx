import React from 'react';
import { BsTwitter } from 'react-icons/bs';

type AuthFormStepHeaderProps = {
  step: number;
  iconAction: JSX.Element;
  callback: (e: React.MouseEvent) => void;
};
const AuthFormStepHeader = ({
  step = 0,
  iconAction,
  callback,
}: AuthFormStepHeaderProps) => {
  return (
    <div className='h-[53px] flex items-center px-4'>
      <>
        <button
          onClick={callback}
          className='rounded-full w-9 h-9 flex items-center justify-center hover:bg-t-light-gray hover:bg-opacity-30 transition-all ease-in-out duration-150'
        >
          {iconAction}
        </button>
        <span className='flex-1'></span>
        <div>
          <BsTwitter size={32} color={'#1DA1F2'} />
        </div>
        <span className='flex-1'></span>
      </>
    </div>
  );
};

export default AuthFormStepHeader;
