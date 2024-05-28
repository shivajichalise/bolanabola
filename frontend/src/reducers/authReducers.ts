import { createSlice } from "@reduxjs/toolkit"
import User from "../types/User"

interface UserState {
    user: User | null
    isSignedIn: boolean
}

const initialState: UserState = {
    user: localStorage.getItem("USER")
        ? JSON.parse(localStorage.getItem("USER")!)
        : null,
    isSignedIn: localStorage.getItem("SIGNED_IN")
        ? localStorage.getItem("SIGNED_IN") === "true"
            ? true
            : false
        : false,
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user
            state.isSignedIn = action.payload.isSignedIn
            localStorage.setItem("USER", JSON.stringify(action.payload.user))
            localStorage.setItem(
                "SIGNED_IN",
                JSON.stringify(action.payload.isSignedIn)
            )
        },
        clearCredentials: (state) => {
            state.user = null
            localStorage.removeItem("USER")
            state.isSignedIn = false
            localStorage.removeItem("SIGNED_IN")
        },
    },
})

export const { setCredentials, clearCredentials } = authSlice.actions
export default authSlice.reducer
