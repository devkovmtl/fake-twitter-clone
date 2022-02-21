import { onSnapshot, QuerySnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { tweetsCollectionRef } from '../../firebase';
import { logout } from '../../services';

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
    <div>
      <h1 className='text-blue-500 text-3xl font-bold underline'>
        TWITTER CLONE
      </h1>
      <button onClick={logout}>LoGout</button>

      <div>
        <h2>Tweets</h2>
        {tweets.length <= 0 && null}
        {tweets.length > 0 &&
          tweets.map((tweet) => (
            <div key={tweet.id}>{JSON.stringify(tweet.name)}</div>
          ))}
      </div>
    </div>
  );
};

export default Home;
