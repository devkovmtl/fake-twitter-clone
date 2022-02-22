import { onSnapshot, QuerySnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import {
  PageHeader,
  SideNavBar,
  SideSuggesionBar,
  Tweet,
  TweetForm,
} from '../../components';
import { tweetsCollectionRef } from '../../firebase';

const Home = () => {
  const [tweets, setTweets] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      tweetsCollectionRef,
      (querySnapshot: QuerySnapshot<any>) => {
        setTweets(
          querySnapshot.docs.map((snapDoc: any) => ({
            id: snapDoc.id,
            ...snapDoc,
          }))
        );
      }
    );

    return unsubscribe;
  }, []);

  return (
    <div className='flex min-h-screen w-[90%] md:[w-80%]  bg-white dark:bg-t-bg-dark text-t-black dark:text-t-extra-extra-light-gray transition-all duration-200  mx-auto'>
      <SideNavBar />
      <main className='w-[600px] border-r border-r-t-extra-light-gray mr-8'>
        <div className='w-full flex-1 flex flex-col justify-between items-center'>
          {/* Header */}
          <PageHeader title='Home' />
          {/* End Header */}

          {/* Tweet Form */}
          <TweetForm />
          {/* End Tweet Form */}

          {/* Tweet */}
          {tweets.length > 0 &&
            tweets.map((tweet, index) => (
              <Tweet
                key={index}
                userName={tweet.userName}
                atName={tweet.atName}
                createdAt={tweet.createdAt}
                textTweetContent={tweet.textTweetContent}
                retweetInfo={tweet.retweetInfo}
                retweetName={tweet.retweetName}
              />
            ))}
          {/* End Of tweet */}
        </div>
      </main>

      {/* Side What is going on hidden md: */}
      <SideSuggesionBar />
    </div>
  );
};

export default Home;
