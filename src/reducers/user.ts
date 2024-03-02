// reducers/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../interfaces';

const initialState: UserState = {
  // Define initial user state values here
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Define reducers and actions here
    // For example:
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
