import { useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import NavbarProps from "./types/NavbarProps"
import { RootState } from "./store"
import InputText from "./components/InputText"
import { IconUser, IconUserPlus } from "@tabler/icons-react"
import IconButton from "./components/IconButton"
import { ChangeEvent, useState } from "react"
import { useAddFriendMutation } from "../src/slices/addFriendSlice"
import { Toaster, toast } from "sonner"
import Chat from "./components/Chat"
import {
    Conversation,
    useFetchConversationsMutation,
} from "./slices/conversationSlice"
import { useQuery } from "@tanstack/react-query"

function App() {
    const navLinks: NavbarProps["menus"] = []
    const theme = useSelector((state: RootState) => state.theme.mode)
    const user = useSelector((state: RootState) => state.auth.user)
    const [isAddFriendModalOpen, setIsAddFriendModalOpen] = useState(false)
    const [addFriendEmail, setAddFriendEmail] = useState<string>("")
    const [conversations, setConversations] = useState<Conversation[]>([])
    const [selectedConversation, setSelectedConversation] =
        useState<Conversation | null>(null)

    const [addFriend] = useAddFriendMutation()
    const [fetchConversations] = useFetchConversationsMutation()

    const toggleModal = () => {
        setIsAddFriendModalOpen(!isAddFriendModalOpen)
    }

    const trackEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setAddFriendEmail(e.target.value)
    }

    const addFriendHandler = async () => {
        const res = await addFriend({ email: addFriendEmail }).unwrap()
        setConversations((prev) => [...prev, res.conversation])

        if (res.message) {
            toast.success("Friend is added.")
        }

        if (res.error) {
            toast.success(res.error.error)
        }
    }

    const fetchConversationsHandler = async () => {
        const res = await fetchConversations().unwrap()
        if (res.conversations) {
            setConversations(res.conversations)
        }
        return res.conversations
    }

    const selectConversationHandler = (id: string) => {
        const conversation = conversations.find(
            (conversation) => conversation.id === id
        )

        if (conversation) setSelectedConversation(conversation)
        else null
    }

    useQuery({
        queryKey: ["conversations"],
        queryFn: fetchConversationsHandler,
    })

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
                            {conversations?.map(
                                (conversation: Conversation) => (
                                    <div
                                        className="rounded-lg my-2 flex justify-start items-center p-3 bg-default-secondary hover:bg-default-secondary-content cursor-pointer"
                                        key={conversation.id}
                                        onClick={() =>
                                            selectConversationHandler(
                                                conversation.id
                                            )
                                        }
                                    >
                                        <div className="avatar online mr-3">
                                            <div className="w-10 rounded-full">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <h1 className="text-xl font-semibold ">
                                            {conversation.FromUser?.name !==
                                            user?.name
                                                ? conversation.FromUser?.name
                                                : conversation.ToUser?.name}
                                        </h1>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <Chat conversation={selectedConversation} />
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
