import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';

import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { db, auth, usersCollectionRef } from '../firebase';
import { FirebaseError } from 'firebase/app';

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const signUpWithEmailPassword = async (
  name: string,
  email: string,
  password: string,
  birthdate: Date
) => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email.trim().toLowerCase(),
      password
    );

    // const user = {
    //   name,
    //   email,
    //   birthdate,
    //   username: name,
    //   createdAt: Date(),
    //   phoneNumber: null,
    //   photoUrl: '',
    //   followings: [],
    //   followers: [],
    //   tweets: [],
    //   likes: [],
    // };

    const user = {
      id: result.user.uid,
      name: result.user.displayName,
      username: result.user.displayName,
      email: result.user.email,
      emailVerified: result.user.emailVerified,
      phoneNumber: result.user.phoneNumber,
      photoURL: result.user.photoURL,
    };

    return user;
  } catch (error: any) {
    throw new Error(error.code);
  }
};

export const loginWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  signOut(auth);
};

export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error);
  }
};
