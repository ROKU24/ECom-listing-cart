import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
 name: 'cart',
 initialState: {
   items: JSON.parse(localStorage.getItem('cartItems')) || [],
   total: 0,
 },
 reducers: {
   addToCart: (state, action) => {
     const existingItem = state.items.find(item => item.id === action.payload.id);
     if (existingItem) {
       existingItem.quantity += 1;
     } else {
       state.items.push({ ...action.payload, quantity: 1 });
     }
     state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
     localStorage.setItem('cartItems', JSON.stringify(state.items));
   },
   removeFromCart: (state, action) => {
     state.items = state.items.filter(item => item.id !== action.payload);
     state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
     localStorage.setItem('cartItems', JSON.stringify(state.items));
   },
   updateQuantity: (state, action) => {
     const { id, quantity } = action.payload;
     const item = state.items.find(item => item.id === id);
     if (item) {
       item.quantity = quantity;
       state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
       localStorage.setItem('cartItems', JSON.stringify(state.items));
     }
   }
 }
});
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;