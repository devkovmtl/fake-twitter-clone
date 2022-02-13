import { doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
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
    // firebase.firestore().collection('cues').doc(id).get()
    const userDoc = doc(db, 'users', id);
    return await (await getDoc(userDoc)).data();
  } catch (error: any) {
    throw new Error(error?.code);
  }
};
