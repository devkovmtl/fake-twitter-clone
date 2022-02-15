import React, { Fragment, useRef, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../context';
import placeholderAvatar from '../../images/avatar.jpg';
import { IFormTweet } from '../../interface';
import { CircularProgressBar } from '..';

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
    formState: { isValid, errors },
  } = useForm<IFormTweet>({
    mode: 'all',
    defaultValues: {
      tweet: '',
    },
  });

  const tweetWatch = watch('tweet');

  const submitForm = async (values: IFormTweet) => {
    console.log(values.tweet);
    closeModal();
  };

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
        <div className='w-full h-screen md:h-[278px] md:max-h-[278px] md:w-[600px] overflow-hidden md:rounded-2xl md:mt-9 bg-black bg-opacity-100 p-4 z-50'>
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
              <form>
                <div className='flex h-28'>
                  <textarea
                    id='tweet'
                    placeholder="What's happening?"
                    className='placeholder-[#6E767D] w-full font-normal bg-transparent focus:border-none border-none focus:outline-none focus:ring-transparent text-white text-lg'
                    {...register('tweet', {
                      maxLength: 240,
                    })}
                  ></textarea>
                </div>

                <div className='mt-4'>
                  {tweetWatch.length > 0 && (
                    <div>
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
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-2xl float-right hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={() => handleSubmit(submitForm)()}
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
