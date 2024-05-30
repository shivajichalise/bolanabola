import { api } from "../api"

const addFriendSlice = api.injectEndpoints({
    endpoints: (build) => ({
        addFriend: build.mutation({
            query: (data) => ({
                url: "/api/friends/add",
                method: "POST",
                body: data,
            }),
        }),
    }),
})

export const { useAddFriendMutation } = addFriendSlice

export default addFriendSlice
