import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Item = {
  id: number;
  title: string;
  price: string;
  image: string;
  amount: number;
};

type ItemsState = {
  cart: Item[];
};

const initialState: ItemsState = {
  cart: [],
};

const onlineStoreSlice = createSlice({
  name: 'onlineStore',
  initialState,
  reducers: {
    addCart: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        price: string;
        image: string;
      }>
    ) => {
      const itemInCart = state.cart.find((el) => el.id === action.payload.id);
      if (itemInCart) {
        itemInCart.amount++;
      } else {
        state.cart.push({ ...action.payload, amount: 1 });
      }
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((el) => el.id === action.payload);
      if (item && item.amount) {
        item.amount++;
      }
    },
    decrementAmount: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((el) => el.id === action.payload);
      if (item && item.amount) {
        if (item.amount === 1) {
          item.amount = 1;
        } else {
          item.amount--;
        }
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const removeItem = state.cart.filter((el) => el.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export const { addCart, incrementAmount, decrementAmount, removeItem } =
  onlineStoreSlice.actions;

export default onlineStoreSlice.reducer;
