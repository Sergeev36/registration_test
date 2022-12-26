import { USER_AUTH } from "./types";
import { IUser } from "../reducers/types";

export function userAuth(user: IUser) {
  return {
    type: USER_AUTH,
    payload: user,
  };
}
