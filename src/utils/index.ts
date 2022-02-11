export const isLeapYear = (year: number): boolean => {
  const intYear = year;
  if (intYear % 4 !== 0) {
    return false;
  } else if (intYear % 400 === 0) {
    return true;
  } else if (intYear % 100 === 0) {
    return false;
  } else {
    return true;
  }
};
