import React, { useState } from 'react';
import classNames from 'classnames';

type ActionTweetButtonProps = {
  textColor: string;
  bgColor: string;
  icon: JSX.Element;
  userHasLikedTweet?: boolean;
  cb: () => void;
  num?: number;
};

const ActionTweetButton = ({
  textColor,
  bgColor,
  icon,
  cb,
  num,
  userHasLikedTweet,
}: ActionTweetButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnter = () => setIsHovered(true);
  const mouseLeave = () => setIsHovered(false);

  const iconStr = classNames('mr-1', 'p-3', 'rounded-full', {
    [`${bgColor}`]: isHovered,
    [`${textColor}`]: isHovered,
  });

  const textStr = classNames({
    [`${textColor}`]: isHovered || userHasLikedTweet,
  });

  return (
    <button
      className='flex items-center justify-start group text-t-dark-gray font-semibold'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={cb}
    >
      <span className={iconStr}>{icon}</span>
      {num ? <span className={textStr}>{num}</span> : null}
    </button>
  );
};

export default ActionTweetButton;
