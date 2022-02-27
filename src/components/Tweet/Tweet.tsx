import React from 'react';
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import { FiShare } from 'react-icons/fi';
import { formatDistance } from 'date-fns';
import { ActionTweetButton, ImageAvatar, RetweetInfoHeader } from '..';

type TweetInfoProps = {
  retweetInfo?: boolean;
  retweetName?: string;
  userName: string;
  atName: string;
  createdAt: any;
  textTweetContent: string;
};

const Tweet = ({
  retweetInfo,
  retweetName,
  userName,
  atName,
  createdAt,
  textTweetContent,
}: TweetInfoProps) => {
  return (
    <div className='w-full flex flex-col bg-white dark:bg-t-bg-dark  px-4 py-2 border-b border-b-t-extra-light-gray overflow-hidden'>
      {/* Does somedy has retweet */}
      {/* {retweetInfo && <RetweetInfoHeader name={retweetName} />} */}
      <div className='flex pt-2'>
        {/* Avatar */}
        <div className='flex flex-col items-center justify-start w-[48px] mr-3'>
          <ImageAvatar />
        </div>
        {/* Content */}
        <div className='w-full flex flex-col'>
          {/* Header */}
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center justify-start space-x-1'>
              <span className='text-black dark:text-white font-bold'>
                {userName}
              </span>
              <span className='text-t-dark-gray'>{atName}</span>
              <span className='text-t-dark-gray'>∙</span>
              {createdAt && (
                <span className='text-t-dark-gray'>
                  {/* {formatDistance(createdAt, new Date())} ago */}
                  {formatDistance(
                    new Date(createdAt.seconds * 1000),
                    new Date()
                  )}{' '}
                  ago
                </span>
              )}
            </div>
            <div className='cursor-pointer p-3 rounded-full text-t-dark-gray hover:bg-t-blue/10 hover:text-t-blue transition ease-in-out duration-150'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                />
              </svg>
            </div>
          </div>
          {/* Tweet Content */}
          <div className='flex-1'>
            <p className='text-black dark:text-white'>{textTweetContent}</p>
          </div>
          {/* Action Button */}
          <div className='max-w-[425px] mt-3 flex items-center justify-around'>
            <ActionTweetButton
              icon={<BsChat />}
              num={16}
              bgColor='bg-t-blue/10'
              textColor='text-t-blue'
              cb={() => {
                console.log('Click CHAT Action Tweet Button');
              }}
            />
            <ActionTweetButton
              icon={<AiOutlineRetweet />}
              num={14}
              bgColor='bg-green-500/10'
              textColor='text-green-500'
              cb={() => {
                console.log('Click RETWEET Action Tweet Button');
              }}
            />

            <ActionTweetButton
              icon={<AiOutlineHeart />}
              num={59}
              bgColor='bg-red-500/10'
              textColor='text-red-500'
              cb={() => {
                console.log('Click LIKES Action Tweet Button');
              }}
            />

            <ActionTweetButton
              icon={<FiShare />}
              bgColor='bg-t-blue/10'
              textColor='text-t-blue'
              cb={() => {
                console.log('Click LIKES Action Tweet Button');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
