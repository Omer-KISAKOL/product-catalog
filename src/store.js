import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import filterReducer from './features/filterSlice.js';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filters: filterReducer,
    },
});
