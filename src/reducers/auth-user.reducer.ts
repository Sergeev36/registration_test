import {USER_AUTH, authAction } from "../action/types";
import { IUser } from "./types";


const initialState: { user: IUser } = {
  user: { username: "", email: "", password: "", promo: "" },
};

function authReducer(state = initialState, action: authAction) {
  switch (action.type) {
    case USER_AUTH:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
}

export default authReducer;
