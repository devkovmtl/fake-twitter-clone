import {
  arrayUnion,
  doc,
  getDoc,
  getDocs,
  query,
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
    return await setDoc(doc(db, 'users', user.id), user);
  } catch (error: any) {
    throw new Error(error?.code);
  }
};

export const getUserById = async (id: string) => {
  try {
    const userDoc = doc(db, 'users', id);
    return await (await getDoc(userDoc)).data();
  } catch (error: any) {
    throw new Error(error?.code);
  }
};

// // Atomically add a new region to the "regions" array field.
// await updateDoc(washingtonRef, {
//   regions: arrayUnion("greater_virginia")
// });

// // Atomically remove a region from the "regions" array field.
// await updateDoc(washingtonRef, {
//   regions: arrayRemove("east_coast")
// });

export const updateUserTweets = async (id: string, tweet: any) => {
  try {
    const userDoc = doc(db, 'users', id);
    if (!userDoc) {
      throw new Error('No user found');
    }
    return updateDoc(userDoc, {
      tweets: arrayUnion(tweet),
    });
  } catch (error: any) {
    throw new Error(error?.code);
  }
};