import { configureStore } from "@reduxjs/toolkit";
import onlineStoreReducer from './storeSlice';
import userReducer from './userSlice';

export const store =  configureStore({
  reducer: {
    onlineStore: onlineStoreReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
