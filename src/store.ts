// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import your root reducer
import { userApi } from './api/user'; // Import your user API slice

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware), // Include the user API middleware
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type

export default store;
