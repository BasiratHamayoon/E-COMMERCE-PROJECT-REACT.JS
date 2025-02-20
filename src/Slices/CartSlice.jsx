import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartProducts: [],
        message: "",
    },
    reducers: {
        addToCart: (state, action) => {
            state.message = "Product is Added to the Cart";
            state.cartProducts.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const isExist = state.cartProducts.find((item) => item.id === action.payload.id);
            if(isExist) {
                state.message = "Product is Removed from Cart"
                state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload.id);
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;