import React, { useState } from 'react';
import { ImageAvatar } from '..';

const TweetForm = () => {
  const [tweets, setTweets] = useState<any[]>([]);
  const [numRow, setNumRow] = useState(0);
  const [numCharPerRow, setNumCharPerRow] = useState(0);
  const [tweetContent, setTweetContent] = useState('');

  return (
    <div className='mt-2 w-full min-h-[140px] flex flex-col border-b border-b-t-extra-light-gray px-4 py-2'>
      <div className='flex-1 flex flex-row'>
        <div className='flex flex-col basis-[48px] mr-3'>
          <ImageAvatar size={48} margin={false} />
        </div>
        <div className='flex-1 flex flex-col justify-between  '>
          <div className='flex-1 max-h-[720px] min-h-[24px]'>
            <textarea
              name='tweet'
              id='tweet'
              placeholder="What's happening?"
              className='w-full h-auto bg-transparent border-none shadow-none outline-none focus:outline-none focus:shadow-none focus:ring-transparent active:shadow-none active:outline-none text-xl font-normal resize-none min-w-fit overflow-hidden'
              rows={1 + numRow}
              value={tweetContent}
              onChange={(e) => {
                if (e.target.scrollHeight > e.target.offsetHeight + 10) {
                  setNumRow(numRow + 1);
                  if (numCharPerRow === 0) {
                    setNumCharPerRow(e.target.value.length);
                  }
                } else if (e.target.value.length < numCharPerRow) {
                  setNumRow(0);
                } else if (
                  numCharPerRow > 0 &&
                  e.target.value.length < numCharPerRow * numRow
                ) {
                  setNumRow((numCharPerRow) => numCharPerRow - 1);
                }

                setTweetContent(e.target.value);
              }}
            ></textarea>
          </div>
          <hr className='bg-t-dark-gray my-1' />
          <div className='flex flex-row items-center justify-end my-3'>
            <button className='text-white bg-t-blue rounded-3xl py-2 px-7 hover:bg-t-blue-dark transition ease-in-out duration-200 font-bold text-lg'>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetForm;
