import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './slices/cartSlice';
import { ProductsSliceReducer } from './slices/ProductsSlice';

const store = configureStore({
    reducer:{
      products: ProductsSliceReducer,
      cart: cartSliceReducer
    }
  })

export default store;