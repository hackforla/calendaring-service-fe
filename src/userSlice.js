import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
      meeting: false,
    },
    meetingPreference: '',
  },
  reducers: {
    setPreference: (state, action) => {
      state.meetingPreference = action.payload;
    },
    setName: (state, action) => {
      state.user.name = action.payload;
    },
  },
});

export const { setName, setPreference } = userSlice.actions;

export default userSlice.reducer;
