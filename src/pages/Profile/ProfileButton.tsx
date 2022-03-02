import React from 'react';

type ProfilePageButtonProps = {
  icon: JSX.Element;
};

const ProfilePageButton = ({ icon }: ProfilePageButtonProps) => {
  return (
    <button className='w-[34px] h-[34px] mr-3 border border-t-extra-light-gray rounded-full hover:bg-t-extra-light-gray flex items-center justify-center'>
      <span>{icon}</span>
    </button>
  );
};

export default ProfilePageButton;
