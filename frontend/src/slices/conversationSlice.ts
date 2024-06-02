import { api } from "../api"
import User from "../types/User"

export interface Conversation {
    id: string
    from_user: string
    to_user: string
    FromUser: User
    ToUser: User
}

type Conversations = {
    conversations: Conversation[]
}

const conversationSlice = api.injectEndpoints({
    endpoints: (build) => ({
        conversation: build.mutation<Conversations, void>({
            query: (data) => ({
                url: "/api/conversations",
                method: "POST",
                body: data,
            }),
        }),
    }),
})

export const { useConversationMutation } = conversationSlice

export default conversationSlice
