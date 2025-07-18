import { createSlice } from "@reduxjs/toolkit";

interface Items {
    name: string,
    size: number | null,
    quantity: number | null
}

interface InitialState {
    items: Items
}

const initialState: InitialState = {
    items: {
        name: '', size: null, quantity: null
    }

}

const cardSlice = createSlice({
    name: 'cardSliceData',
    initialState,
    reducers: {
        addItemTocard: ((state: InitialState, action: any) => {
            // if(state.items[action.payload] )
            console.log(state)
            console.log(action)
        })
    }
})

export const { addItemTocard } = cardSlice.actions;

export default cardSlice.reducer;