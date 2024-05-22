import { createSlice } from "@reduxjs/toolkit"
import User from "../types/User"

interface AuthState {
    isSignedIn: boolean
    jwt: string
}

interface UserState extends User, AuthState {}

const initialState: UserState = {
    name: "",
    email: "",
    isSignedIn: false,
    jwt: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
})

export default userSlice.reducer
