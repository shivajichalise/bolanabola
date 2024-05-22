import { configureStore } from "@reduxjs/toolkit"
import themeReducers from "./reducers/themeReducers"

export const store = configureStore({
    reducer: {
        theme: themeReducers,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
