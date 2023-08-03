import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.unshift(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
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

