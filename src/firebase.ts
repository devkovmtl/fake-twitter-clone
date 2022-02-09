import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: '<FIREBASE_API_KEY>',
  authDomain: '<FIREBASE_API_KEY>',
  projectId: '<FIREBASE_API_KEY>',
  storageBucket: '<FIREBASE_API_KEY>',
  messagingSenderId: '<FIREBASE_API_KEY>',
  appId: '<FIREBASE_API_KEY>',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
