import { configureStore } from "@reduxjs/toolkit";
import { productSice } from "./Slices/ProductSlice";
import  cartReducer  from "./Slices/CartSlice";
import favoriteReducer  from "./Slices/favoriteSlice";


export const store = configureStore({
    reducer: {
        products : productSice.reducer,
        cart: cartReducer,
        cart: favoriteReducer,
    }
})