import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false
}

export const productsFetch = createAsyncThunk(
    'products/ProductsFetch',
    async (thunkAPI) => {
        const res = await fetch('https://fakestoreapi.com/products?limit=20').then(
        (data) => data.json()
      )
      return res
    }
  )

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state) => {
          state.loading = true
        },
        [productsFetch.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.items = payload
        },
        [productsFetch.rejected]: (state) => {
          state.loading = false
        },
      },
})

export const ProductsSliceReducer = productsSlice.reducer