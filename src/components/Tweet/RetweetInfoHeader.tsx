import React from 'react';
import { AiOutlineRetweet } from 'react-icons/ai';

type RetweetInfoHeaderProps = {
  name: string;
};
const RetweetInfoHeader = ({ name }: RetweetInfoHeaderProps) => {
  return (
    <div className='flex items-center justify-start font-bold text-t-dark-gray'>
      <span className='basis-[38px]'></span>
      <span className='mr-3'>
        <AiOutlineRetweet />
      </span>
      <span>{name} has retweet</span>
    </div>
  );
};

export default RetweetInfoHeader;
