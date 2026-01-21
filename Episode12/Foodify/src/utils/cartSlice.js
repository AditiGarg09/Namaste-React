import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action) => state.items.push(action.payload),
        removeItem: (state,action)=> state.items.slice(action.payload),
        clearCart: (state) => state.items = []
    }
})

export const {addItem, removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;