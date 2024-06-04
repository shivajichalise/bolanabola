import { IconSend2 } from "@tabler/icons-react"
import ChatProps from "../types/ChatProps"
import ChatBubble from "./ChatBubble"
import IconButton from "./IconButton"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import {
    Message,
    useFetchMessagesMutation,
    useSendMessageMutation,
} from "../slices/conversationSlice"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { socket } from "../socket"
import useChatScroll from "../hooks/useChatScroll"

const Chat = (props: ChatProps) => {
    const { conversation } = props
    const user = useSelector((state: RootState) => state.auth.user)
    const [sendMessage] = useSendMessageMutation()
    const [fetchMessages, { isLoading: isMessagesLoading }] =
        useFetchMessagesMutation()
    const [messages, setMessages] = useState<Message[]>([])
    const [messageToSend, setMessageToSend] = useState("")
    const messageBoxRef = useRef<HTMLInputElement>(null)
    const queryClient = useQueryClient()
    const messagesContainer = useRef<HTMLDivElement>(null)

    const Scroll = () => {
        if (messagesContainer.current) {
            const { offsetHeight, scrollHeight, scrollTop } =
                messagesContainer.current as HTMLDivElement
            if (scrollHeight <= scrollTop + offsetHeight + 100) {
                messagesContainer.current?.scrollTo(0, scrollHeight)
            }
        }
    }

    useEffect(() => {
        Scroll()
    }, [messages])

    const fetchMessagesHandler = async () => {
        const res = await fetchMessages({
            conversation_id: conversation!.id,
        }).unwrap()
        if (res.messages) {
            setMessages(res.messages)
        }
        return res.messages
    }

    useQuery({
        queryKey: ["messages"],
        queryFn: fetchMessagesHandler,
    })

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ["messages"] })
    }, [conversation])

    useEffect(() => {
        if (socket === null) return
        socket.emit("new_user", user?.id)
    }, [socket])

    useEffect(() => {
        if (socket === null) return
        socket.on("message_received", (res) => {
            setMessages((prev) => [...prev, res.message])
        })

        return () => {
            socket.off("message_received")
        }
    }, [socket])

    const sendMessageHandler = async () => {
        const res = await sendMessage({
            conversation_id: conversation!.id,
            message: messageToSend,
        })
        if (res.data) {
            const messageToAdd = res.data.message as unknown as Message
            setMessages((prev) => [...prev, messageToAdd])

            if (socket === null) return
            socket.emit("message_sent", {
                message: res.data.message,
                conversationRecipientId:
                    conversation!.FromUser.id === user?.id
                        ? conversation!.ToUser.id
                        : conversation!.FromUser.id,
            })
        }
        if (messageBoxRef.current) messageBoxRef.current.value = ""
    }

    return (
        <div className="bg-neutral rounded-lg h-5/6 w-3/5 text-default-primary flex flex-col justify-between">
            {conversation ? (
                <>
                    <div className="rounded-lg flex justify-start items-center p-3 bg-neutral-content">
                        <div className="avatar mr-3">
                            <div className="w-10 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold ">
                            {conversation.FromUser?.name !== user?.name
                                ? conversation.FromUser?.name
                                : conversation.ToUser?.name}
                        </h1>
                    </div>

                    <div
                        className="flex flex-col p-3 h-full overflow-y-scroll"
                        ref={messagesContainer}
                    >
                        {isMessagesLoading ? (
                            <div className="flex h-full justify-center items-center">
                                <span className="loading loading-spinner loading-lg"></span>
                            </div>
                        ) : (
                            <div>
                                {messages.map((message) => (
                                    <ChatBubble
                                        position={
                                            message.from_user == user?.id
                                                ? "end"
                                                : "start"
                                        }
                                        message={message.message}
                                        key={message.id}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-around items-center p-4">
                        <div className="w-full mr-2">
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input w-full focus-visible:outline-0 bg-default-primary text-neutral placeholder:text-neutral"
                                ref={messageBoxRef}
                                onChange={(e) => {
                                    setMessageToSend(e.target.value)
                                }}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <IconButton
                                type="error"
                                onClick={sendMessageHandler}
                            >
                                <IconSend2 size={30} />
                            </IconButton>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center h-full">
                    <h1>No conversation is selected</h1>
                </div>
            )}
        </div>
    )
}

export default Chat
