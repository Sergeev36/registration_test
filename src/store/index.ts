import { combineReducers, createStore } from "redux";
import usersReducer from "../reducers/users.reducer";
import authReducer from "../reducers/auth-user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";

const rootReducer = combineReducers({
  usersReducer,
  authReducer,
});

const persistConfig: any = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export default store;
