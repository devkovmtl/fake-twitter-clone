import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { getUserById } from '../services';

const useUserAuthListener = () => {
  let userLocalStorage;

  if (localStorage.getItem('currentUser')) {
    userLocalStorage = JSON.parse(localStorage.getItem('currentUser')!);
  }

  const [user, setUser] = useState<any>(userLocalStorage);

  const fetchUser = async (id: string) => {
    try {
      const user = await getUserById(id);
      return user;
    } catch (error) {
      throw new Error('An error has occured while fetching your profile');
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      // console.log('USER STATE CHANGED ', u);
      if (u) {
        fetchUser(u.uid)
          .then((res: any) => {
            console.log('USER STATE CHANGED', res);
            localStorage.setItem('currentUser', JSON.stringify(res));
            setUser(res);
          })
          .catch((err) => {
            localStorage.removeItem('currentUser');
            setUser(null);
          });
      } else {
        localStorage.removeItem('currentUser');
        setUser(null);
      }
    });
  }, []);

  return { user, setUser };
};

export default useUserAuthListener;
