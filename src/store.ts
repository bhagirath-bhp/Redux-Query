import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { userApi } from './api/user';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
