import React from 'react';
import classNames from 'classnames';
import ImageSrc from '../../images/avatar.jpg';

type ImageAvatarProps = {
  src?: string;
};

const ImageAvatar = ({ src }: ImageAvatarProps) => {
  let className = classNames('rounded-full w-full');
  return (
    <img
      src={src ? src : ImageSrc}
      alt='profile-avatar'
      className={className}
    />
  );
};

export default ImageAvatar;
