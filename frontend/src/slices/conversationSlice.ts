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

export interface Message {
    id: string
    conversation_id: string
    from_user: string
    message: string
    createdAt: Date
}

type Messages = {
    messages: Message[]
}

const conversationSlice = api.injectEndpoints({
    endpoints: (build) => ({
        fetchConversations: build.mutation<Conversations, void>({
            query: (data) => ({
                url: "/api/conversations",
                method: "POST",
                body: data,
            }),
        }),
        fetchMessages: build.mutation<Messages, { conversation_id: string }>({
            query: (data) => ({
                url: "/api/messages",
                method: "POST",
                body: data,
            }),
        }),
    }),
})

export const { useFetchConversationsMutation, useFetchMessagesMutation } =
    conversationSlice

export default conversationSlice
