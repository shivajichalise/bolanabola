import { createSlice } from "@reduxjs/toolkit"
import User from "../types/User"

interface UserState {
    user: User | null
    isSignedIn: boolean
    jwt: string
}

const initialState: UserState = {
    user: localStorage.getItem("USER")
        ? JSON.parse(localStorage.getItem("USER")!)
        : null,
    isSignedIn: false,
    jwt: "",
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload
            localStorage.setItem("USER", JSON.stringify(action.payload))
        },
        clearCredentials: (state) => {
            state.user = null
            localStorage.removeItem("USER")
        },
    },
})

export const { setCredentials, clearCredentials } = authSlice.actions
export default authSlice.reducer
