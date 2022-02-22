import React from 'react';
import { toTitleCase } from '../../utils';

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className='sticky top-0 z-10 bg-white dark:bg-t-bg-dark w-full flex items-center justify-start h-[53px]'>
      <div className='px-4 py-2'>
        <h1 className='text-black dark:text-white text-lg font-bold'>
          {toTitleCase(title)}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
