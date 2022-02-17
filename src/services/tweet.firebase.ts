import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db, tweetsCollectionRef } from '../firebase';

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
    const tweet = {
      text,
      tweeterId: user.id,
      name: user.username,
      createdAt: serverTimestamp(),
      likes: [],
      retweets: [],
      belongTo: user,
    };

    const newDocRef = doc(collection(db, 'tweets'));
    await setDoc(newDocRef, {
      ...tweet,
      id: newDocRef.id,
    });
    // const tweetDoc = doc(db, 'tweets', newDocRef.id);
    // return await (await getDoc(tweetDoc)).data();
    return true;
  } catch (error: any) {
    throw new Error(error?.code);
  }
};
