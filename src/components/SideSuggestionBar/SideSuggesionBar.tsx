import React from 'react';
import { SideInputSearch, SideSuggestionArticle } from '.';

function SideSuggesionBar() {
  return (
    // <div className='hidden md:flex md:flex-col min-w-[350px] h-screen sticky top-2 pt-3 pb-16'>
    <div className='sticky top-0 left-0 h-screen hidden md:w-[275px] md:flex flex-col justify-between border-l border-l-t-extra-light-gray pl-2'>
      {/* Search */}
      <div className='mt-2 mb-3 w-[275px] min-h-[32px] h-[53px] fixed top-2 z-[2]'>
        <SideInputSearch />
      </div>
      {/* What going on */}
      <div className='mt-[73px] mb-3 w-[275px] bg-t-extra-light-gray rounded-3xl'>
        <div className='rounded-2xl w-full'>
          <div className='py-4 px-3'>
            <h1 className='text-t-black font-bold text-xl'>What's going on</h1>
          </div>
          {/* Article */}

          <SideSuggestionArticle
            category='Video games · Trending'
            title='Playstation 5'
            nbrTweets='27.5K'
          />

          <SideSuggestionArticle
            category='World news · LIVE'
            title='Olympics Games'
            nbrTweets='50.2K'
          />

          <div className='cursor-pointer px-3  hover:bg-t-light-gray/10 h-[52px] flex items-center'>
            <div>
              <span className='text-t-blue'>See more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideSuggesionBar;
