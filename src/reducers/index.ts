// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user'; // Import your user reducer
import { userApi } from '../api/user'; // Import your user API slice

const rootReducer = combineReducers({
  user: userReducer,
  // Include the reducer for userApi
  [userApi.reducerPath]: userApi.reducer,
  // Add other reducers here
});

export default rootReducer;
