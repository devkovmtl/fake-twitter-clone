// email patter validation
export const EMAIL_VALIDATION = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
// minimum of 8 characters One UPPERCASE letter, One LOWERCASE letter, One number
export const PASSWORD_VALIDATION =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
