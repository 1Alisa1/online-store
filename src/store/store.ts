import { configureStore } from "@reduxjs/toolkit";
import onlineStoreReducer from './storeSlice';

export const store =  configureStore({
  reducer: {
    onlineStore: onlineStoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
