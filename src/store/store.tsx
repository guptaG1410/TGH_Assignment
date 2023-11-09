import { configureStore } from '@reduxjs/toolkit';
import bookmarkSlice from './slices/bookmarkSlice';
import quoteSlice from './slices/quoteSlice';
import tagSlice from './slices/tagSlice';

const store = configureStore({
  reducer: {
    bookmarks: bookmarkSlice,
    quotes: quoteSlice,
    tags: tagSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
