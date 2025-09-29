import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//ham lay tat ca san pham
export const getAllProduct = createAsyncThunk("getAllProduct", async () => {
    try {
        const res = await axios.get<any>("http://localhost:8080/products");
        return res.data
    } catch (error) {
        console.log(error);
        
    }
})
//ham them moi san pham
const ProductSlice = createSlice({
    name: "Products",
    initialState: {
        products:[]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getAllProduct.pending, () => {})
          .addCase(getAllProduct.fulfilled, (state, action) => {
            state.products = action.payload;
          });
    }
  
})
export default ProductSlice.reducer