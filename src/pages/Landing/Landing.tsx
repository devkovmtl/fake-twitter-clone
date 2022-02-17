import React, { useContext, useEffect, useState } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { BiHomeCircle, BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { HOME_PATH } from '../../constants';
import { UserContext } from '../../context';
import { logout, getAllTweets } from '../../services';
import { Modal } from '../../components';
import ImgAvatar from '../../images/avatar.jpg';

const Landing = () => {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate();
  const srcAvatar =
    user.profileURL && user.profileURL.length > 0 ? user.profileURL : ImgAvatar;

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const fetchAllTweets = async () => {
    try {
      const res = await getAllTweets();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllTweets()
      .then((res: any) => {
        console.log(res);
        setTweets((prevState) => prevState.concat(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='bg-black h-full w-full text-white flex flex-row'>
      <div className='bg-black w-[68px] h-full flex flex-col items-center justify-between px-1 border-r border-r-[rgb(110,118,125)]'>
        <button
          className='h-12 w-12 rounded-full hover:bg-[rgba(28,155,240,0.1)] flex items-center justify-center'
          onClick={() => navigate(HOME_PATH)}
        >
          <BsTwitter size={24} color={'#fff'} />
        </button>

        <div className='mt-1 mb-2'>
          <nav className='space-y-1'>
            <a
              href={HOME_PATH}
              className='h-12 w-12 rounded-full hover:bg-[rgba(28,155,240,0.1)] flex items-center justify-center'
            >
              <BiHomeCircle size={24} color={'#fff'} />
            </a>

            <a
              href={HOME_PATH}
              className='h-12 w-12 rounded-full hover:bg-[rgba(28,155,240,0.1)] flex items-center justify-center'
            >
              <BiSearch size={24} color={'#fff'} />
            </a>
          </nav>
        </div>

        <span className='flex-1'></span>
      </div>
      <div className='flex-1'>
        {/* <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.id}</p>
        <button onClick={logout}>Logout</button>

        <button
          onClick={openModal}
          className='bg-blue-500 px-7 py-4 rounded-3xl'
        >
          Tweet
        </button> */}
        <div>
          <div>
            {tweets.length > 0 && (
              <div className='border-b border-b-[rgb(239,243,244)]'>
                <article className='px-4 cursor-pointer flex overflow-hidden'>
                  <div className='flex flex-col flex-1'>
                    {/* Who likes the tweets */}
                    {/* Needs a conditions */}
                    <div className='flex pt-3 mb-1 items-center text-[rgb(83,100,113)] font-semibold text-base'>
                      <div className='basis-[48px] flex items-center justify-end mr-3 text-[rgb(83,100,113)]'>
                        <AiFillHeart size={15} color='rgb(83,100,113)' />
                      </div>
                      <div className='flex-1'>
                        <a
                          href='#'
                          className='hover:cursor-pointer hover:underline hover:underline-offset-1'
                        >
                          John Doe Liked
                        </a>
                      </div>
                    </div>
                    {/* #End who likes the tweets */}
                    {/*  Tweets */}
                    <div className='flex flex-row'>
                      {/* Avatar */}
                      <div className='mr-3 basis-[48px] items-center'>
                        <img
                          src={srcAvatar}
                          alt='User Avatar'
                          className='h-[48px] w-[48px] rounded-full'
                        />
                      </div>
                      {/* Tweets container */}
                      <div className='pb-3'>
                        <div className='flex items-start justify-between'>
                          <div className='flex justify-center'>
                            <div>
                              <a href='' className='cursor-pointer'>
                                Name Tweeter
                              </a>
                            </div>
                            <div>
                              <a href=''>@ame</a>
                            </div>
                            <div>
                              <a href=''>Date</a>
                            </div>
                          </div>
                        </div>

                        <div></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )}
          </div>
        </div>

        <Modal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default Landing;
