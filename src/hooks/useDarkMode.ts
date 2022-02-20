import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<any>(() => {
    const isDMode = localStorage.getItem('darkMode') === 'true';
    return !isDMode || false;
  });

  useEffect(() => {
    // grab html to add or remove dark option
    const root = window.document.documentElement;
    // check the previous if we are dark then light
    const previousTheme = isDarkMode ? 'light' : 'dark';
    root.classList.remove(previousTheme);
    // next will be opposite of removed
    const nextTheme = isDarkMode ? 'dark' : 'light';
    root.classList.add(nextTheme);

    localStorage.setItem('darkMode', `${!isDarkMode}`);
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;
