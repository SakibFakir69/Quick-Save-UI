// store.js
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/downloadApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// If you want, you can export helpers for dispatch and state
export const AppDispatch = store.dispatch;
export const getRootState = () => store.getState();
