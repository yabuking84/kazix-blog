import { configureStore } from "@reduxjs/toolkit"
import { slice as newsSlice } from "@/store/news/slice"



export const store = configureStore({
    reducer: {
        news: newsSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

