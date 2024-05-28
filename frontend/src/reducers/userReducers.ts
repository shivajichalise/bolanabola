import { api } from "../api"
import User from "../types/User"

interface LoggedInUser {
    user: User | {}
    isSigendIn: true | false
}

const userSlice = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => ({
                url: "/api/login",
                method: "POST",
                body: data,
            }),
        }),
        register: build.mutation({
            query: (data) => ({
                url: "/api/register",
                method: "POST",
                body: data,
            }),
        }),
        logout: build.mutation({
            query: () => ({
                url: "/api/logout",
                method: "POST",
            }),
        }),
        isLoggedIn: build.mutation<LoggedInUser, void>({
            query: () => ({
                url: "/api/is-signed-in",
                method: "GET",
                credentials: "include",
            }),
        }),
    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useIsLoggedInMutation,
} = userSlice
export default userSlice
