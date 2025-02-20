import { createSlice } from "@reduxjs/toolkit";

export const FavoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favoriteProducts: [],
        message: ""
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const isExist = state.favoriteProducts.find((item) => item.id === action.payload.id);
            if(isExist) {
                state.message = "Remove from Favorite!";
                state.favoriteProducts = state.favoriteProducts.filter((item) => item.id !== action.payload.id);
            } else {
                state.message = "Add to Favorite!";
                state.favoriteProducts.push(action.payload);
            }
        },
    },
});

export const { toggleFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;