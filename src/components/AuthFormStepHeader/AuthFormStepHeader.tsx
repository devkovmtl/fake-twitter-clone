import React from 'react';
import { BsTwitter } from 'react-icons/bs';

type AuthFormStepHeaderProps = {
  step: number;
  iconAction: JSX.Element;
  callbackStep0?: () => void;
  callbackStep1?: (number: number) => void;
};
const AuthFormStepHeader = ({
  step = 0,
  iconAction,
  callbackStep0,
  callbackStep1,
}: AuthFormStepHeaderProps) => {
  return (
    <div className='h-[53px] flex items-center px-4'>
      <>
        <button
          onClick={() => (step === 0 ? callbackStep0 : callbackStep1)}
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
