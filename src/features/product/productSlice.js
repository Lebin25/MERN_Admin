import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import productService from './productService';

export const getProducts = createAsyncThunk('product/get-products', async (thunkAPI) => {
   try {
      return await productService.getProducts();
   } catch (error) {
      return thunkAPI.rejectWithValue(error)
   }
})

export const createProduct = createAsyncThunk('product/create-product', async (productData, thunkAPI) => {
   try {
      return await productService.createProduct(productData);
   } catch (error) {
      return thunkAPI.rejectWithValue(error)
   }
})

export const resetState = createAction('Reset_all')

const initialState = {
   products: [],
   isError: false,
   isLoading: false,
   isSuccess: false,
   message: "",
}

export const productSlice = createSlice({
   name: "products",
   initialState,
   reducer: {},
   extraReducers: (builder) => {
      builder
         .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.products = action.payload;
         })
         .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
         })
         .addCase(createProduct.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdProduct = action.payload;
         })
         .addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
         })
         .addCase(resetState, () => initialState)
   }
})

export default productSlice.reducer