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
        localStorage.removeItem('authUser');
        setUserAuth(undefined);
      }
      if (user) {
        fetchUser(user.uid)
          .then((u) => {
            localStorage.setItem('authUser', JSON.stringify(u));
            setUserAuth(u);
          })
          .catch((err) => {
            localStorage.removeItem('authUser');
            setUserAuth(undefined);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  return [userAuth, setUserAuth];
};

export default useAuthListener;
