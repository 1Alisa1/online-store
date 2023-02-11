import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  surname: null,
  email: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.name = null;
      state.surname = null;
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
