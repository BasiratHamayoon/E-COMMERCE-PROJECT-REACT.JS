import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "allProducts",
    async() => {
        try{
            const response = await axios.get("https://fakestoreapi.com/products");
            return response.data;
        } catch (error) {
            console.log(error)
            return error;
        }
    }
) ;

export const productSice = createSlice({
    name: "products",
    initialState:{
        products: [],
        isLoading: false,
        message: ""
    },

    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            console.log("Fetching is Start Please Wait...");
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            console.log("Fetching is successFul", state.products);
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.message = action.payload || "Fetching failed";
            console.error("Fetching Failed" , action.message)
        });
    },
});

export const { setProducts, setLoading, setMessage } = productSice.actions;
export default productSice.reducer;