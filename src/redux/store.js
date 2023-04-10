import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from 'redux/filterSlice';
import { contactsReducer } from 'redux/contactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    contacts: contactsReducer,
  },
});
