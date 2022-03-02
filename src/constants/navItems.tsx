import { HOME_PATH, PROFILE_PATH } from '.';

export const navItems = [
  {
    text: 'home',
    path: HOME_PATH,
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
      />
    ),
  },
  // {
  //   text: 'explore',
  //   icon: (
  //     <path
  //       strokeLinecap='round'
  //       strokeLinejoin='round'
  //       strokeWidth={2}
  //       d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
  //     />
  //   ),
  // },
  // {
  //   text: 'notifications',
  //   icon: (
  //     <path
  //       strokeLinecap='round'
  //       strokeLinejoin='round'
  //       strokeWidth={2}
  //       d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
  //     />
  //   ),
  // },

  // {
  //   text: 'messages',
  //   icon: (
  //     <path
  //       strokeLinecap='round'
  //       strokeLinejoin='round'
  //       strokeWidth={2}
  //       d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  //     />
  //   ),
  // },
  // {
  //   text: 'bookmarks',
  //   icon: (
  //     <path
  //       strokeLinecap='round'
  //       strokeLinejoin='round'
  //       strokeWidth={2}
  //       d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
  //     />
  //   ),
  // },
  // {
  //   text: 'lists',
  //   icon: (
  //     <path
  //       strokeLinecap='round'
  //       strokeLinejoin='round'
  //       strokeWidth={2}
  //       d='M4 6h16M4 10h16M4 14h16M4 18h16'
  //     />
  //   ),
  // },

  {
    text: 'profile',
    path: PROFILE_PATH,
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
      />
    ),
  },
  // {
  //   text: 'more',
  //   icon: (
  //     <path
  //       strokeLinecap='round'
  //       strokeLinejoin='round'
  //       strokeWidth={2}
  //       d='M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  //     />
  //   ),
  // },
];
