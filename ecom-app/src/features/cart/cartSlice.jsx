import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existing = state.items.find((item) => item.id === action.payload.id)

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            console.log("state after add:", JSON.parse(JSON.stringify(state)));
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },

        increaseQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) item.quantity += 1;
        },

        decreaseQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(i => i.id !== action.payload)
                }
            }
        },

        clearCart: (state) => {
            state.items = []
        }
    }
})

//selectors
export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectCartSubTotal = (state) => state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)



export default cartSlice.reducer
export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions