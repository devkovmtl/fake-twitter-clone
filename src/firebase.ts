import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCzekfW6cPmp400laCVCqy1CwmANTJLy3k',
  authDomain: 'twitter-clone-dd466.firebaseapp.com',
  projectId: 'twitter-clone-dd466',
  storageBucket: 'twitter-clone-dd466.appspot.com',
  messagingSenderId: '316232404761',
  appId: '1:316232404761:web:d37ee3f9139ff29150bf88',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const usersCollectionRef = collection(db, 'users');
export const tweetsCollectionRef = collection(db, 'tweets');
