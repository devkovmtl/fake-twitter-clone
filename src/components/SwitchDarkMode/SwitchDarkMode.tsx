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
        } relative inline-flex items-center h-[12px] rounded-full w-[22px]`}
      >
        <span
          className={`${
            isDarkMode ? 'translate-x-3' : 'translate-x-1'
          } inline-block w-[8px] h-[8px] transform bg-white rounded-full transition ease-in-out duration-200`}
        ></span>
      </Switch>
    </>
  );
};

export default SwitchDarkMode;
