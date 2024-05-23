import { createSlice } from "@reduxjs/toolkit"

interface ThemeState {
    mode: string
}

const initialState: ThemeState = {
    mode:
        localStorage.getItem("THEME") !== null
            ? localStorage.getItem("THEME")!
            : "light",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
            localStorage.setItem("THEME", state.mode)
        },
    },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
