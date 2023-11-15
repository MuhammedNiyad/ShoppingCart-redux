import { createSlice } from "@reduxjs/toolkit"
import { CartItem } from "../../components/CartItem"

type CartItem = {
    id: number
    quantity: number

}

export interface cartState {
    isOpen: boolean
    cartItem: CartItem[]
    cartQuantity: number
}

const initialState: cartState = {
    isOpen: false,
    cartItem: [],
    cartQuantity: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getCartQuantity: (state) => {
            state.cartQuantity = state.cartItem.reduce((quantity, item) => item.quantity + quantity, 0)
        },
        openCart: (state) => {
            state.isOpen = true;
        },
        closeCart: (state) => {
            state.isOpen = false;
        },
      
        increaseCartQuantity: (state, action) => {
            const id = action.payload;
            const currItem = state.cartItem.find(item => item.id === id);

            if (!currItem) {
                state.cartItem.push({ id, quantity: 1 });
            } else {
                state.cartItem = state.cartItem.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        },
        decreaseCartQuantity: (state, action) => {
            const id = action.payload;
            const currItem = state.cartItem.find(item => item.id === id);

            if (!currItem) {
                state.cartItem.push({ id, quantity: 1 });
            } else {
                state.cartItem = state.cartItem.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cartItem = state.cartItem.filter(item => item.id !== id)
        }

    }
});

export const { getCartQuantity, openCart, closeCart, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = cartSlice.actions;

export function getItemQuantity(cartItems: CartItem[], id: number): number {
    return cartItems.find(item => item.id === id)?.quantity || 0;
};

export default cartSlice.reducer;