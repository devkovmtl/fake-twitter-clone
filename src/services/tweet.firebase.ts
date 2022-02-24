import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore';

import { db, tweetsCollectionRef } from '../firebase';

export const getAllUsersTweets = async (userId: string) => {
  try {
    // create doc reference
    const q = query(tweetsCollectionRef, where('authorId', '==', userId));

    const { docs } = await getDocs(q);

    return docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error: any) {
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
    console.log('Author Id ', user.id);
    await setDoc(newDocRef, {
      id: newDocRef.id,
      authorId: user.id,
      content: text,
      createdAt: serverTimestamp(),
      author: user,
      anwsers: [],
      retweets: [],
      likes: [],
    });
    return true;
  } catch (error: any) {
    console.log(error);
    throw new Error(error?.code);
  }
};
