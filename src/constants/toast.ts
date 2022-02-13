import { toast, ToastOptions } from 'react-toastify';

const options: ToastOptions = {
  position: 'bottom-center',
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

export const notifyError = (message: string) => toast.error(message, options);

export const notifyInfo = (message: string) => toast.info(message, options);
