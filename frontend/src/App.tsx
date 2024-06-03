import { useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import NavbarProps from "./types/NavbarProps"
import { RootState } from "./store"
import InputText from "./components/InputText"
import { IconSend2, IconUser, IconUserPlus } from "@tabler/icons-react"
import IconButton from "./components/IconButton"
import ChatBubble from "./components/ChatBubble"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { useAddFriendMutation } from "../src/slices/addFriendSlice"
import { Toaster, toast } from "sonner"
import { useQuery } from "@tanstack/react-query"
import {
    Conversation,
    Message,
    useFetchConversationsMutation,
    useFetchMessagesMutation,
    useSendMessageMutation,
} from "./slices/conversationSlice"
import { socket } from "./socket"

function App() {
    const navLinks: NavbarProps["menus"] = []
    const theme = useSelector((state: RootState) => state.theme.mode)
    const user = useSelector((state: RootState) => state.auth.user)
    const messageEl = useRef<HTMLDivElement>(null)
    const [addFriend, { isLoading, error }] = useAddFriendMutation()
    const [
        fetchConversations,
        { isLoading: isConversationLoading, error: conversationError },
    ] = useFetchConversationsMutation()

    const [
        fetchMessages,
        { isLoading: isMessageLoading, error: messageError },
    ] = useFetchMessagesMutation()

    const [
        sendMessage,
        { isLoading: isMessageSending, error: sendMessageError },
    ] = useSendMessageMutation()

    const scrollToBottom = () => {
        if (messageEl.current) {
            const target = messageEl.current
            target.scroll({ top: target.scrollHeight, behavior: "smooth" })
        }
    }

    useEffect(() => {
        if (messageEl && messageEl.current) {
            messageEl.current.addEventListener("DOMNodeInserted", (event) => {
                const target = event.currentTarget as HTMLDivElement
                target.scroll({ top: target.scrollHeight, behavior: "smooth" })
            })
        }
    }, [])

    useEffect(() => {
        scrollToBottom() // Scroll to bottom on component mount
    }, [])

    const [isAddFriendModalOpen, setIsAddFriendModalOpen] = useState(false)

    const toggleModal = () => {
        setIsAddFriendModalOpen(!isAddFriendModalOpen)
    }

    const [addFriendEmail, setAddFriendEmail] = useState<string>("")

    const trackEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setAddFriendEmail(e.target.value)
    }

    const addFriendHandler = async () => {
        const res = await addFriend({ email: addFriendEmail }).unwrap()
        console.log(res)
    }

    useEffect(() => {
        if (error) {
            if ("status" in error) {
                // you can access all properties of `FetchBaseQueryError` here
                const errMsg =
                    typeof error.data === "string"
                        ? JSON.parse(error.data)
                        : error.data

                toast.error(errMsg.error)
            }
        }
    }, [error])

    const getConversations = async () => {
        const res = await fetchConversations().unwrap()
        setConversationId(res.conversations[0].id)
        return res.conversations
    }

    const conversations = useQuery({
        queryFn: () => getConversations(),
        queryKey: ["conversations"],
    })

    const [conversationId, setConversationId] = useState<string>("")
    const [conversationPersonName, setConversationPersonName] =
        useState<string>("")
    const [conversationRecipientId, setConversationRecipientId] =
        useState<string>("")

    const [messages, setMessages] = useState<Message[]>([])

    const fetchMessagesHandler = async (conversationId: string) => {
        const res = await fetchMessages({
            conversation_id: conversationId,
        }).unwrap()
        setMessages(res.messages)
    }

    const conversationClickHandler = (
        conversationId: string,
        conversationPersonName: string,
        conversationRecipientId: string
    ) => {
        setConversationId(conversationId)
        setConversationPersonName(conversationPersonName)
        setConversationRecipientId(conversationRecipientId)
        fetchMessagesHandler(conversationId)
    }

    const [messageToSend, setMessageToSend] = useState("")
    const messageBoxRef = useRef<HTMLInputElement>(null)

    const sendMessageHandler = async () => {
        const res = await sendMessage({
            conversation_id: conversationId,
            message: messageToSend,
        })
        if (res.data) {
            const messageToAdd = res.data.message as unknown as Message
            setMessages((prev) => [...prev, messageToAdd])

            if (socket === null) return
            socket.emit("send_message", {
                message: res.data.message,
                conversationRecipientId: conversationRecipientId,
            })
        }
        if (messageBoxRef.current) messageBoxRef.current.value = ""
    }

    useEffect(() => {
        if (socket === null) return
        socket.emit("new_user", user?.id)
    }, [socket])

    useEffect(() => {
        if (socket === null) return
        socket.on("receive_message", (res) => {
            setMessages((prev) => [...prev, res.message])
        })

        return () => {
            socket.off("receive_message")
        }
    }, [socket])

    return (
        <>
            <Navbar menus={navLinks} />
            <div
                className={`flex justify-center ${theme === "dark" && "bg-base-300"} items-center h-[calc(100vh-4rem)]`}
            >
                <div className="w-4/5 flex justify-around items-center h-full">
                    <div className="flex flex-col bg-neutral rounded-lg h-5/6 w-1/3 text-default-primary">
                        <div className="w-full px-4">
                            <InputText
                                type="text"
                                name="name"
                                hasIcon={true}
                                icon={<IconUser size={17} />}
                                placeholder="Search by email"
                            />
                        </div>
                        <div className="flex flex-col pl-4 pr-4 pb-4 overflow-y-scroll no-scrollbar">
                            {isConversationLoading ? (
                                <span className="loading loading-spinner loading-md"></span>
                            ) : (
                                conversations?.data?.map(
                                    (conversation: Conversation) => (
                                        <div
                                            className="rounded-lg my-2 flex justify-start items-center p-3 bg-default-secondary hover:bg-default-secondary-content cursor-pointer"
                                            key={conversation.id}
                                            onClick={() =>
                                                conversationClickHandler(
                                                    conversation.id,
                                                    conversation.FromUser.id ===
                                                        user?.id
                                                        ? conversation.ToUser
                                                              .name
                                                        : conversation.FromUser
                                                              .name,
                                                    conversation.FromUser.id ===
                                                        user?.id
                                                        ? conversation.ToUser.id
                                                        : conversation.FromUser
                                                              .id
                                                )
                                            }
                                        >
                                            <div className="avatar online mr-3">
                                                <div className="w-10 rounded-full">
                                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                            </div>
                                            <h1 className="text-xl font-semibold ">
                                                {conversation.FromUser.id ===
                                                user?.id
                                                    ? conversation.ToUser.name
                                                    : conversation.FromUser
                                                          .name}
                                            </h1>
                                        </div>
                                    )
                                )
                            )}
                        </div>
                    </div>
                    <div className="bg-neutral rounded-lg h-5/6 w-3/5 text-default-primary flex flex-col justify-between">
                        <div className="rounded-lg flex justify-start items-center p-3 bg-neutral-content">
                            {conversationPersonName !== "" && (
                                <>
                                    <div className="avatar mr-3">
                                        <div className="w-10 rounded-full">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <h1 className="text-xl font-semibold ">
                                        {conversationPersonName}
                                    </h1>
                                </>
                            )}
                        </div>

                        <div
                            className="flex flex-col p-3 h-full overflow-y-scroll"
                            ref={messageEl}
                        >
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

                        <div className="flex justify-around items-center p-4">
                            <div className="w-full mr-2">
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input w-full focus-visible:outline-0 bg-default-primary text-neutral placeholder:text-neutral"
                                    onChange={(e) => {
                                        setMessageToSend(e.target.value)
                                    }}
                                    ref={messageBoxRef}
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
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 p-5">
                <IconButton type="primary" onClick={toggleModal}>
                    <IconUserPlus size={17} />
                </IconButton>
            </div>

            <div className={`modal ${isAddFriendModalOpen && "modal-open"}`}>
                <div className="modal-box">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-neutral"
                        onClick={toggleModal}
                    >
                        ✕
                    </button>
                    <h3 className="text-lg font-bold text-neutral">
                        Add a friend
                    </h3>
                    <InputText
                        type="email"
                        name="email"
                        placeholder="Enter your friend's email"
                        onChange={trackEmail}
                    />
                    <button
                        className="btn btn-primary btn-sm text-text-200"
                        onClick={addFriendHandler}
                    >
                        Add
                    </button>
                </div>
                <label className="modal-backdrop" onClick={toggleModal}>
                    Close
                </label>
            </div>
            <Toaster richColors />
        </>
    )
}

export default App
