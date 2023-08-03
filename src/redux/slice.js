import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Cristiano Ronaldo', number: '369-42-89' },
      { id: 'id-2', name: 'David Beckham', number: '598-28-27' },
      { id: 'id-3', name: 'Andrei Shevchenko', number: '111-222-333' },
      { id: 'id-4', name: 'Zinedin Zidan', number: '469-89-48' },
    ],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.unshift(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { setFilter, addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

