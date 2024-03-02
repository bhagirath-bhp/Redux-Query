import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import { userApi } from '../api/user';

const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
  // Add other reducers here
});

export default rootReducer;
