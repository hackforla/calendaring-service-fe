import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
      verified: false,
    },
    meetingPreferences: {},
  },
  reducers: {
    setName: (state, action) => {
      state.user.name = action.payload;
    },
    setPreferences: (state, action) => {
      state.meetingPreferences = action.payload;
    },
  },
});

export const { setName, setPreference, setPreferences } = userSlice.actions;

export default userSlice.reducer;
