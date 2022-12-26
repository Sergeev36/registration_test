import {IUser} from "../reducers/types";

export const USER_ADDED = "USER_ADDED";
export const USER_AUTH = "USER_AUTH";

export interface usersAction {
  type: "USER_ADDED";
  payload: IUser[] ;
}
export interface authAction {
  type: "USER_AUTH";
  payload: IUser;
}
