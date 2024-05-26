import { api } from "../api"

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
    }),
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
    userSlice
export default userSlice
