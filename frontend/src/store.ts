import { configureStore } from "@reduxjs/toolkit"
import themeReducers from "./reducers/themeReducers"
import authReducers from "./reducers/authReducers"
import { api } from "./api"

export const store = configureStore({
    reducer: {
        theme: themeReducers,
        auth: authReducers,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
