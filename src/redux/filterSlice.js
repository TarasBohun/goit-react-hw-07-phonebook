import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterValue: '',
  },
  reducers: {
    filterContact(state, { payload }) {
      state.filterValue = payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export default filterSlice.reducer;
