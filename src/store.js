import { configureStore } from "@reduxjs/toolkit";
import  productReducer  from "./Slices/ProductSlice";
import  cartReducer  from "./Slices/CartSlice";
import FavoriteReducer from "./Slices/favoriteSlice";


export const store = configureStore({
    reducer: {
        products : productReducer,
        cart: cartReducer,
        favorite: FavoriteReducer,
    }
})