import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: '',
  role: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication(state, action) {
      state.isAuthenticated = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setRole(state, action) {
      state.role = action.payload;
    },
  },
});

export const selectAuth = (state) => state.auth;
export const selectUserRole = (state) => selectAuth(state).role;

export const { setAuthentication, setRole, setToken } = authSlice.actions;
export default authSlice.reducer;
