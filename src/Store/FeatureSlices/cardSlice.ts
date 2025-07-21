import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CardItem {
    name: string,
    size: number | null,
    quantity: number | null,
    price: number | null
}

export interface CardState {
    products: CardItem[],
    totalPrice: number
}

const initialState: CardState = {
    products: [],
    totalPrice: 0
}

const cardSlice = createSlice({
    name: 'cardSliceData',
    initialState,
    reducers: {
        addItemTocard: ((state: CardState, action: PayloadAction<CardItem>) => {
            const existingItemIndex = state.products.findIndex((item) => item.name === action.payload.name && item.size === action.payload.size);
            if (existingItemIndex !== -1) {
                const existingItem = state.products[existingItemIndex];
                state.products[existingItemIndex] = { ...existingItem, quantity: existingItem.quantity ? existingItem.quantity + 1 : 1 }
                state.totalPrice += action.payload.price || 0;
            }
            else {
                state.products.push(action.payload);
                state.totalPrice += action.payload.price || 0;
            }

        }),
        increaseProductQuantity: ((state: CardState, action: PayloadAction<{ name: string, size: number | null }>) => {
            state.products.map((item: CardItem) => {
                if (item.name === action.payload.name && item.size === action.payload.size) {
                    item.quantity = item.quantity ? item.quantity + 1 : 1;
                    state.totalPrice += item.price || 0;
                }
            })
        }),
        decreaseProductQuantity: ((state: CardState, action: PayloadAction<{ name: string, size: number | null }>) => {
            state.products.map((item: CardItem) => {
                if (item.name === action.payload.name && item.size === action.payload.size) {
                    if(item.quantity && item.quantity <= 1) {
                        state.products = state.products.filter((i)=> i.name !== item.name || i.size !== item.size);
                        state.totalPrice -= item.price || 0;   
                        return 
                    }
                    item.quantity = item.quantity ? item.quantity - 1 : 0;
                    state.totalPrice -= item.price || 0;
                }
            })
        })
    }
})

export const { addItemTocard, increaseProductQuantity, decreaseProductQuantity } = cardSlice.actions;

export default cardSlice.reducer;