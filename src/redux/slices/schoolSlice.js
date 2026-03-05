import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  schoolCode: null,
  schoolInfo: null,
};

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    setSchool: (state, action) => {
      state.schoolCode = action.payload.schoolCode;
      state.schoolInfo = action.payload.schoolInfo;
    },
    clearSchool: state => {
      state.schoolCode = null;
      state.schoolInfo = null;
    },
  },
});

export const { setSchool, clearSchool } = schoolSlice.actions;
export default schoolSlice.reducer;
