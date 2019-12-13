export interface UserLoginInfo {
  user: {
    username: string;
    name: string;
    role: string;
  };
  token: string;
}