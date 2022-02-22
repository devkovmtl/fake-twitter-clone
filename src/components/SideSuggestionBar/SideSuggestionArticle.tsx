import React from 'react';

type SideSuggestionArticleProps = {
  category: string;
  title: string;
  nbrTweets: string;
};

const SideSuggestionArticle = ({
  category,
  title,
  nbrTweets,
}: SideSuggestionArticleProps) => {
  return (
    <div className='cursor-pointer px-3 py-3 min-h-[82px] hover:bg-t-light-gray/10'>
      <div className='flex justify-between'>
        <span className='text-t-dark-gray font-normal'>{category}</span>
        <button className='text-t-dark-gray hover:text-t-blue'>
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
        </button>
      </div>
      <div className='pt-1'>
        <span className='text-t-black  font-bold'>{title}</span>
      </div>
      <div className='text-sm text-t-dark-gray font-light pt-1'>
        <span>{nbrTweets} Tweets</span>
      </div>
    </div>
  );
};

export default SideSuggestionArticle;
