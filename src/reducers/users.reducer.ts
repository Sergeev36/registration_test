import { USER_ADDED, usersAction } from "../action/types";
import { usersState } from "./types";

const initialState: usersState = {
  users: [
    {
      username: "admin",
      email: "admin@admin.com",
      password: "admin2022",
      promo: "",
    },
  ],
};

function usersReducer(state = initialState, action: usersAction) {
  switch (action.type) {
    case USER_ADDED:
      return {
        users: [...state.users, ...action.payload],
      };
    default:
      return state;
  }
}

export default usersReducer;
