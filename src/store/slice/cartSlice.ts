import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
    items: Array<any>;
    totalAmount: number;
    size: string;
    totalQuantity: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    size: '',
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(
            state: CartState,
            action: PayloadAction<{ product: any; quantity: number; size: string }>
        ) {

            const newItem = action.payload.product;

            try {

                let res: any = addCart(action.payload.size, action.payload.quantity, action.payload.product)

                if (res) {
                    const existingItem = state.items.find((item) => item.id === newItem.id);

                    state.totalQuantity = state.totalQuantity + action.payload.quantity;
                    state.totalAmount =
                        state.totalAmount +
                        action.payload.quantity * action.payload.product.price;

                    if (!existingItem) {
                        const totalPrice = newItem.price * action.payload.quantity;
                        state.items.push({
                            ...newItem,
                            quantity: action.payload.quantity,
                            size: action.payload.size,
                            totalPrice,
                        });
                    } else {
                        const totalPrice =
                            existingItem.totalPrice +
                            existingItem.price * action.payload.quantity;
                        existingItem.quantity += action.payload.quantity;
                        existingItem.size = action.payload.size;
                        existingItem.totalPrice = totalPrice;
                    }
                }
            } catch (err) {

            }

        },

        removeFromCart(state: CartState, action: PayloadAction<string>) {
            const productId = action.payload;
            const existingItem = state.items.find((item) => item.id === productId);

            state.totalQuantity--;

            state.totalAmount = state.totalAmount - existingItem?.price!;

            if (existingItem?.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== productId);
            } else {
                existingItem!.quantity--;
                existingItem!.totalPrice =
                    existingItem!.totalPrice - existingItem?.price!;
            }
        },
        clearCart(state) {
            state = initialState;
        },
    },
});


const addCart = async (size: string, qty: number, product_id: string) => {
    try {
        const res: any = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({
                size: size,
                qty: qty,
                product_id: product_id,
            }),
        });
     
        console.log('dd ',res);
        
    } catch (err) {
        console.log(err);
    }

}



// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;