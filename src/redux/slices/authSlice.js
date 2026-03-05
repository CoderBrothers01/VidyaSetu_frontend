import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  school: null,      // selected school object
  schoolCode: null,  // selected school code
  user: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSchool: (state, action) => {
      state.school = action.payload.school;
      state.schoolCode = action.payload.schoolCode;
    },

    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.school = null;
      state.schoolCode = null;
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setSchool, setLogin, logout } = authSlice.actions;
export default authSlice.reducer;