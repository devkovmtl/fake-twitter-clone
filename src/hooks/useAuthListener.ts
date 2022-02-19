import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { getUserById } from '../services';

const useAuthListener = () => {
  const [userAuth, setUserAuth] = useState<any>(() => {
    const userStorage = JSON.parse(localStorage.getItem('authUser')!);
    return userStorage || undefined;
  });

  const fetchUser = async (id: string) => {
    try {
      const user = await getUserById(id);
      return user;
    } catch (error) {
      throw new Error('An error has occured while fetching your profile');
    }
  };

  useEffect(() => {
    // listen to firebase state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        localStorage.set('authUser', undefined);
        setUserAuth(undefined);
      }
      if (user) {
        // TODO
        // fetch user to set update profile
        // fetchUser(user.uid)
        localStorage.set(
          'authUser',
          localStorage.setItem('authUser', JSON.stringify(user))
        );
        setUserAuth(user);
      }
    });

    return () => unsubscribe();
  }, []);

  return [userAuth, setUserAuth];
};

export default useAuthListener;
