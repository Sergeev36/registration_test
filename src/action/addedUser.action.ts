import { USER_ADDED } from "./types";
import { IUser } from "../reducers/types";

export function userAdded(user: IUser[]) {
  return {
    type: USER_ADDED,
    payload: user,
  };
}
