export interface IFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  month: number | null;
  day: number | null;
  year: number | null;
  tracking: boolean;
  agreePolicy: boolean;
}
