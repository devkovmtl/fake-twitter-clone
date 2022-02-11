import React from 'react';

type FormSubtitleProps = {
  subtitle: string;
};

const FormSubtitle = ({ subtitle }: FormSubtitleProps) => {
  return (
    <h2 className='text-white text-2xl my-5 font-bold leading-6  break-words'>
      {subtitle}
    </h2>
  );
};

export default FormSubtitle;
