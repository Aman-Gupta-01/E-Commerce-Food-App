import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/cartSlice'
import categoryReducer from './slice/categorySlice'
import searchReducer from './slice/searchSlice'

export const store = configureStore({
  reducer: {
    cartReducer,
    categoryReducer,
    searchReducer,
  },
})
