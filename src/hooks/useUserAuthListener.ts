import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const useUserAuthListener = () => {
  let userLocalStorage;
  let userIdLocalStorage;
  if (localStorage.getItem('currentUser')) {
    userLocalStorage = JSON.parse(localStorage.getItem('currentUser')!);
  }
  if (localStorage.getItem('currentUserId')) {
    userIdLocalStorage = JSON.parse(localStorage.getItem('currentUserId')!);
  }

  const [user, setUser] = useState<any>(userLocalStorage);
  const [userId, setUserId] = useState<any>(userIdLocalStorage);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (u) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
        console.log('USER ', u);
      } else {
        // User is signed out
        // ...
        console.log('NO USER ', u);
      }
    });
  });

  return { user, setUser };
};

export default useUserAuthListener;
