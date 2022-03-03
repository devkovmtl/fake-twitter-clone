import {
  arrayUnion,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';

import { db, usersCollectionRef } from '../firebase';

export const doesUserExist = async (email: string) => {
  const q = query(
    usersCollectionRef,
    where('email', '==', email.trim().toLowerCase())
  );
  const { docs } = await getDocs(q);
  const results = docs.map((d) => d.data());

  return results.length > 0;
};

export const addUser = async (user: any) => {
  try {
    return await setDoc(doc(db, 'users', user.id), {
      ...user,
      followings: [],
      followers: [],
      likes: [],
      tweets: [],
      createdAt: serverTimestamp(),
    });
  } catch (error: any) {
    throw new Error(error?.code);
  }
};

export const getUserById = async (id: string) => {
  try {
    const userDocRef = doc(db, 'users', id);
    const userDoc = await getDoc(userDocRef);
    return await userDoc.data();
  } catch (error: any) {
    throw new Error(error?.code);
  }
};

export const addTweetToUser = async (id: string, tweet: any) => {
  console.log('user id', id);
  console.log('user tweet', tweet);
  try {
    const userDoc = doc(db, 'users', id);
    if (!userDoc) {
      throw new Error('No user found');
    }
    console.log('User Doc', userDoc);
    return updateDoc(userDoc, {
      tweets: arrayUnion({ ...tweet }),
    });
  } catch (error: any) {
    throw new Error(error?.code);
  }
};
