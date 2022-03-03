import { async } from '@firebase/util';
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';

import { db, tweetsCollectionRef } from '../firebase';

export const getAllUsersTweets = async (userId: string) => {
  try {
    // create doc reference
    const q = query(
      tweetsCollectionRef,
      where('authorId', '==', userId),
      orderBy('createdAt', 'desc')
    );

    const { docs } = await getDocs(q);

    return docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error: any) {
    console.log(error);
    throw new Error(error.code || 'An error has occurred');
  }
};

export const getAllTweets = async () => {
  try {
    const { docs } = await getDocs(tweetsCollectionRef);
    return docs.map((d) => d.data());
  } catch (error: any) {
    throw new Error('Error fetching tweets');
  }
};

export const addTweet = async (user: any, text: string) => {
  try {
    const newDocRef = doc(collection(db, 'tweets'));
    const tweet = {
      id: newDocRef.id,
      authorId: user.id,
      content: text,
      createdAt: serverTimestamp(),
      author: user,
      anwsers: [],
      retweets: [],
      likes: [],
    };
    await setDoc(newDocRef, tweet);
    return tweet;
  } catch (error: any) {
    console.log(error);
    throw new Error(error?.code);
  }
};

export const doesUserLikedTweet = (userId: string, likes: string[]) => {
  return likes.includes(userId);
};

export const userLikeTweet = async (tweetId: string, userId: string) => {
  try {
    const tweetDoc = doc(db, 'tweets', tweetId);
    return updateDoc(tweetDoc, {
      likes: arrayUnion(userId),
    });
  } catch (error: any) {
    throw new Error(error?.code);
  }
};

export const userUnlikeTweet = async (tweetId: string, userId: string) => {
  try {
    const tweetDoc = doc(db, 'tweets', tweetId);
    return updateDoc(tweetDoc, {
      likes: arrayRemove(userId),
    });
  } catch (error: any) {
    throw new Error(error?.code);
  }
};
