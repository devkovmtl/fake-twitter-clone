import React from 'react';
import classNames from 'classnames';
import ImageSrc from '../../images/avatar.jpg';

type ImageAvatarProps = {
  size: number;
  src?: string;
  margin: boolean;
};

const ImageAvatar = ({ src, size, margin }: ImageAvatarProps) => {
  let className = classNames('rounded-full', {
    'mr-2': margin,
  });
  return (
    <img
      src={src ? src : ImageSrc}
      alt='profile-avatar'
      className={className}
      width={size}
      height={size}
    />
  );
};

export default ImageAvatar;
