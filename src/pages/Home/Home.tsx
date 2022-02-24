import React, { useState, useEffect } from 'react';
import { onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';

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
    const q = query(tweetsCollectionRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot: QuerySnapshot<any>) => {
      setTweets(
        querySnapshot.docs.map((snapDoc: any) => ({
          id: snapDoc.id,
          ...snapDoc.data(),
        }))
      );
    });

    return unsubscribe;
  }, []);

  return (
    <div className='flex md:w-[80%] md:mx-auto'>
      <SideNavBar />

      <main className='h-full overscroll-y-auto basis-[600px] flex flex-col md:mr-8  '>
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
              // <Tweet
              //   key={index}
              //   userName={tweet.userName}
              //   atName={tweet.atName}
              //   createdAt={tweet.createdAt}
              //   textTweetContent={tweet.textTweetContent}
              //   retweetInfo={tweet.retweetInfo}
              //   retweetName={tweet.retweetName}
              // />
              // <p
              //   key={index}
              //   className='bg-gray-300 my-2 border-t-blue max-w-sm'
              // >
              //   {JSON.stringify(tweet)}
              // </p>
              <Tweet
                key={tweet.id}
                userName={tweet.author.username}
                atName={tweet.author.atTweeterName}
                createdAt={tweet.createdAt}
                textTweetContent={tweet.content}
              />
            ))}
          {/* End Of tweet */}
        </div>
      </main>

      <SideSuggesionBar />
    </div>
  );
};

export default Home;
