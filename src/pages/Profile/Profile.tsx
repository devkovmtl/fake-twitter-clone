import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import {
  Loading,
  PageHeader,
  SideNavBar,
  SideSuggesionBar,
  Tweet,
} from '../../components';
import { ProfilePageButton } from '.';
import { getAllUsersTweets, getUserById, getUsersLike } from '../../services';
import ImageSrc from '../../images/avatar.jpg';
import { UserContext } from '../../context';
import { format, formatDistanceToNowStrict } from 'date-fns/esm';
import { classNames } from '../../utils';
import { onSnapshot, query, QuerySnapshot, where } from 'firebase/firestore';
import { tweetsCollectionRef } from '../../firebase';

const TABS = ['Tweets', 'Likes'];

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>({});
  const [userTweets, setUserTweets] = useState<any>([]);
  const [tweetsLiked, setTweetsLiked] = useState<any>([]);

  let params: any = useParams();
  const { userAuth } = useContext(UserContext);

  useEffect(() => {
    getUserById(params.userId)
      .then((user) => {
        if (user) {
          // console.log(user);
          setUser((prevState: any) => ({ ...prevState, ...user }));
          // console.log('USER ', user!.tweets);
          getAllUsersTweets(user.id).then((tweets) => {
            console.log(tweets);
            setUserTweets(() => [...tweets]);
          });
          if (user.likes.length > 0) {
            getUsersLike(user.likes).then((tweets) => {
              console.log('LIKES ', tweets);
              setTweetsLiked(() => [...tweets]);
            });
          }
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });

    // getAllUsersTweets()
  }, []);

  useEffect(() => {
    let unsubscribe;
    if (userAuth.likes.length > 0) {
      const q = query(
        tweetsCollectionRef,
        where('id', 'in', [...userAuth.likes])
      );

      unsubscribe = onSnapshot(q, (querySnapshot: QuerySnapshot<any>) => {
        setTweetsLiked(
          querySnapshot.docs.map((snapDoc: any) => ({
            id: snapDoc.id,
            ...snapDoc.data(),
          }))
        );
      });
    }

    return unsubscribe;
  }, []);

  return (
    <div className='flex md:w-[80%] md:mx-auto'>
      <SideNavBar />
      {isLoading ? (
        <main className='h-full overscroll-y-auto w-[600px] flex flex-col'>
          <div className='w-full flex flex-col justify-between items-center'>
            <Loading />
          </div>
        </main>
      ) : (
        <main className='h-full overscroll-y-auto w-[600px] flex flex-col'>
          <div className='w-full flex flex-col justify-between items-center'>
            {/* MAIN */}

            {/* HEADER  */}
            <PageHeader title={user.name} />

            {/* Header profile */}
            <div className='w-full'>
              <div className=' h-[200px] bg-slate-500'></div>
              {/* HEADER image, name... */}
              <div className='relative w-full pb-8'>
                <div className='w-[135px] h-[135px] absolute -top-[75px] ml-4'>
                  <img
                    src={ImageSrc}
                    alt='avatar'
                    className='rounded-full border-2 border-white w-full'
                  />
                </div>
                <div className='flex w-full flex-row-reverse items-center py-3'>
                  {userAuth.id === params.userId ? null : (
                    <>
                      <ProfilePageButton
                        icon={
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                            />
                          </svg>
                        }
                      />

                      <ProfilePageButton
                        icon={
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                            />
                          </svg>
                        }
                      />

                      <button>Follow</button>
                    </>
                  )}
                </div>

                <div className='header-information mt-14 ml-4'>
                  <div className='flex flex-col'>
                    <h1 className='font-bold text-2xl'>{user.name}</h1>
                    <h2 className='font-normal text-t-dark-gray text-base'>
                      {user.atTweeterName}
                    </h2>
                  </div>
                  <div className='mt-5 flex items-center text-t-dark-gray'>
                    <span className=' mr-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                      </svg>
                    </span>
                    <p>
                      Joined{' '}
                      {formatDistanceToNowStrict(
                        new Date(user.createdAt.seconds * 1000),
                        { unit: 'month' }
                      ) === '0 months'
                        ? 'Less than 1 month ago'
                        : format(
                            new Date(user.createdAt.seconds * 1000),
                            'MMMM Y'
                          )}
                    </p>
                  </div>
                  <div className='mt-5 flex items-center'>
                    <span className='mr-5'>
                      {user.followings.length} Following
                    </span>
                    <span>{user.followers.length} Followers</span>
                  </div>
                </div>
              </div>
            </div>
            {/* #End Header profile */}

            {/* Tab  */}
            <div className='w-full px-2 sm:px-0 '>
              <Tab.Group>
                <Tab.List className='flex'>
                  {TABS.map((el) => (
                    <Tab
                      key={el}
                      className={({ selected }) =>
                        classNames(
                          'w-full border-b-2',
                          'hover:bg-t-extra-light-gray py-5',
                          selected ? 'border-t-blue' : ''
                        )
                      }
                    >
                      <p className='font-bold text-t-dark-gray border-t-blue'>
                        {el}
                      </p>
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    {userTweets.length === 0 ? (
                      <div>
                        <p>No tweet yet</p>
                      </div>
                    ) : (
                      userTweets.map((tweet: any) => (
                        <Tweet key={tweet.id} tweet={tweet} />
                      ))
                    )}
                  </Tab.Panel>
                  <Tab.Panel>
                    {user.likes.length === 0 ? (
                      <div></div>
                    ) : (
                      tweetsLiked.map((tweet: any) => (
                        <Tweet key={tweet.id} tweet={tweet} />
                      ))
                    )}
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </main>
      )}

      <SideSuggesionBar />
    </div>
  );
};

export default Profile;
