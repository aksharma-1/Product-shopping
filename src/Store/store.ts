import { configureStore } from "@reduxjs/toolkit";
import cardSlice from './FeatureSlices/cardSlice'

export const store = configureStore({
    reducer: {
        cardSliceData: cardSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;