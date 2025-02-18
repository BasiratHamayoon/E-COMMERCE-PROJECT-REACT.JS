import { configureStore } from "@reduxjs/toolkit";
import { productSice } from "./Slices/ProductSlice";


export const store = configureStore({
    reducer: {
        products : productSice.reducer,
    }
})