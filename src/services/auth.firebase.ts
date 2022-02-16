import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore';

import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebase';

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);

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

export const signUpWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email.trim().toLowerCase(),
      password
    );

    const user = {
      id: result.user.uid,
      name: result.user.displayName,
      username: result.user.displayName,
      email: result.user.email,
      emailVerified: result.user.emailVerified,
      phoneNumber: result.user.phoneNumber,
      photoURL: result.user.photoURL,
      createdAt: serverTimestamp(),
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
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = {
      id: result.user.uid,
      name: result.user.displayName,
      username: result.user.displayName,
      email: result.user.email,
      emailVerified: result.user.emailVerified,
      phoneNumber: result.user.phoneNumber,
      photoURL: result.user.photoURL,
      createdAt: serverTimestamp(),
    };

    return user;
  } catch (error: any) {
    throw new Error(error?.code);
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
