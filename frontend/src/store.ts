import { configureStore } from "@reduxjs/toolkit"
import themeReducers from "./reducers/themeReducers"
import userReducers from "./reducers/userReducers"

export const store = configureStore({
    reducer: {
        theme: themeReducers,
        user: userReducers,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
