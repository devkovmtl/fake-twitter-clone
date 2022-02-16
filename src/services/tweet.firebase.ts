import {
  addDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
  serverTimestamp,
} from 'firebase/firestore';
import { db, tweetsCollectionRef } from '../firebase';

export const addTweet = async (user: any, text: string) => {
  try {
    const tweet = {
      text,
      tweeterId: user.id,
      name: user.username,
      createdAt: serverTimestamp(),
      likes: [],
      retweets: [],
      belongTo: user,
    };
    return await addDoc(tweetsCollectionRef, tweet);
  } catch (error: any) {
    throw new Error(error?.code);
  }
};
