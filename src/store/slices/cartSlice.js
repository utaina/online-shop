import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartItemsQuantity: 0,
    cartItemsCost: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].itemQuantity += 1;
            } else {const product = {...action.payload, itemQuantity: 1};
            state.cartItems.push(product)
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            const itemsInCart = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartItems = itemsInCart;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        decreaseQuantity(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if(state.cartItems[itemIndex].itemQuantity > 1) {
                state.cartItems[itemIndex].itemQuantity -= 1
            } else if (state.cartItems[itemIndex].itemQuantity === 1) {
                const itemsInCart = state.cartItems.filter(item => item.id !== action.payload.id)
                state.cartItems = itemsInCart;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        clearCart(state, action) {
            state.cartItems = []
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, item) => {
                const {price, itemQuantity} = item;
                const itemTotal = price * itemQuantity
                cartTotal.total += itemTotal;
                cartTotal.quantity += itemQuantity
                return cartTotal;
            }, {total: 0,
            quantity: 0})
            state.cartItemsCost = total.toFixed(2);
            state.cartItemsQuantity = quantity;
        }
    }
})

export const {addToCart, removeFromCart, decreaseQuantity, clearCart, getTotals} = cartSlice.actions;

export default cartSlice.reducer;