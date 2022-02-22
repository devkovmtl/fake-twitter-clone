export const toTitleCase = (str: string) =>
  `${str[0].toLocaleUpperCase()}${str.slice(1).toLocaleLowerCase()}`;
