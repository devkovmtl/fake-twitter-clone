import React, { useRef, useContext, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../context';
import placeholderAvatar from '../../images/avatar.jpg';
import { IFormTweet } from '../../interface';
import { CircularProgressBar } from '..';
import { addTweet, updateUserTweets } from '../../services';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const Modal = ({ isOpen, closeModal }: ModalProps) => {
  const cancelButtonRef = useRef(null);
  const { user } = useContext(UserContext);
  const avatar = user.photoURL ? user.photoURL : placeholderAvatar;

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<IFormTweet>({
    mode: 'all',
    defaultValues: {
      tweet: '',
    },
  });

  const tweetWatch = watch('tweet');

  const submitForm = async (values: IFormTweet) => {
    if (values.tweet.trim().length === 0) {
      return;
    }
    if (values.tweet.trim().length > 240) {
      return;
    }
    // console.log(user);
    // console.log(values.tweet);
    const result = await addTweet(user, values.tweet);
    // console.log('Modal ', result);
    // // if (!result) {
    // //   // problem
    // // }
    // // await updateUserTweets(user.id, result);
    // closeModal();
    // reset();
    if (!result) {
      // issue
    }
    closeModal();
    reset();
  };

  useEffect(() => {
    reset();
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      as='div'
      className='fixed inset-0 z-10 flex items-center justify-center overflow-y-auto'
      initialFocus={cancelButtonRef}
    >
      <div className='min-h-screen flex flex-col items-center w-full bg-[rgba(91,112,131,0.4)]'>
        <Dialog.Overlay className='fixed inset-0' />
        <div className='w-full h-screen md:min-h-[278px] md:max-h-[345px]   md:w-[600px] overflow-hidden md:rounded-2xl md:mt-9 bg-black bg-opacity-100 p-4 z-50'>
          <div className='h-[53px]'>
            <button
              onClick={closeModal}
              className='rounded-full w-9 h-9 flex items-center justify-center hover:bg-[rgba(239,243,244,0.1)] hover:bg-opacity-10 transition-all'
            >
              <AiOutlineClose size={20} color={'#fff'} />
            </button>
          </div>

          <div className='mt-2 flex'>
            <div className='mr-3 pt-1'>
              <img
                src={avatar}
                className='rounded-full w-12 h-12'
                alt='avatar'
              />
            </div>
            <div className='pt-1 flex-1'>
              <form className='flex flex-col'>
                <div className=''>
                  <textarea
                    id='tweet'
                    placeholder="What's happening?"
                    className='block placeholder-[#6E767D] w-full font-normal bg-transparent focus:border-none border-none focus:outline-none focus:ring-transparent text-white text-lg h-[160px] rounded-xl md:resize-none bg-[rgba(100,116, 139,0.1)]'
                    {...register('tweet', {
                      required: true,
                      maxLength: 240,
                    })}
                    rows={6}
                  ></textarea>
                </div>

                <div className='mt-7 flex items-center justify-end'>
                  {tweetWatch.length > 0 && (
                    <div className='mr-5'>
                      <CircularProgressBar
                        width='30'
                        progressValue={tweetWatch.length}
                        centerCircleColor='#000'
                        ringWaitProgressColor='rgb(47,51,54)'
                        ringProgressColor='rgb(26,140,216)'
                        errorColor='rgb(255,0,0)'
                        maxProgressValue={240}
                      />
                    </div>
                  )}

                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-2xl float-right hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:bg-blue-300'
                    onClick={() => handleSubmit(submitForm)()}
                    disabled={!isValid}
                  >
                    Tweet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
