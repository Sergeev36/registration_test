export interface IUser {
  username: string;
  email: string;
  password: string;
  promo: string;
}

export interface usersState {
  users: IUser[];
}