import { toast, ToastOptions } from 'react-toastify';

const options: ToastOptions = {
  position: 'bottom-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: 'colored',
};

export const notifyError = (message: string) => toast.error(message, options);

export const notifyInfo = (message: string) => toast.info(message, options);
