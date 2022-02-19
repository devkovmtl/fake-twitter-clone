import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  UserCredential,
} from 'firebase/auth';

import { auth } from '../firebase';

interface IUserFromCredentials {
  id: string;
  name: string | null;
  username: string | null;
  atTweeterName: string;
  email: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
}

const createUserWithAuthResult = (
  result: UserCredential
): IUserFromCredentials => {
  return {
    id: result.user.uid,
    name: result.user.displayName,
    username: result.user.displayName,
    atTweeterName: `@${result.user.displayName}`,
    email: result.user.email,
    emailVerified: result.user.emailVerified,
    phoneNumber: result.user.phoneNumber,
    photoURL: result.user.photoURL,
  };
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = createUserWithAuthResult(result);
    return user;
  } catch (error: any) {
    throw new Error(error.message || 'Error SignIn with Google');
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
    const user = createUserWithAuthResult(result);
    return user;
  } catch (error: any) {
    throw new Error(error.message || 'Error SignIn with Email and Password');
  }
};

export const loginWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = createUserWithAuthResult(result);
    return user;
  } catch (error: any) {
    throw new Error(error.message || 'Error Login with Email and Password');
  }
};

export const logout = () => {
  signOut(auth);
};

export const sendPasswordReset = async (email: string) => {
  try {
    const result = await sendPasswordResetEmail(auth, email);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
