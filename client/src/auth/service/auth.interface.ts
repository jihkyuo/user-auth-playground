export interface UserBodyDto {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
  name: string;
  location?: string;
}