import React, { useContext } from 'react';
import { Switch } from '@headlessui/react';
import { ThemeContext } from '../../context';

const SwitchDarkMode = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <>
      <Switch
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
        className={`${
          isDarkMode ? 'bg-t-blue' : 'bg-t-bg-dark'
        } relative inline-flex items-center h-6 rounded-full w-11 border border-t-extra-light-gray`}
      >
        <span
          className={`${
            isDarkMode ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
        ></span>
      </Switch>
    </>
  );
};

export default SwitchDarkMode;
