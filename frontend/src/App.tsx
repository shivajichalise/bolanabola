import { useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import NavbarProps from "./types/NavbarProps"
import { RootState } from "./store"
import InputText from "./components/InputText"
import { IconSend2, IconUser } from "@tabler/icons-react"
import IconButton from "./components/IconButton"
import ChatBubble from "./components/ChatBubble"
import { useEffect, useRef } from "react"

function App() {
    const navLinks: NavbarProps["menus"] = []
    const theme = useSelector((state: RootState) => state.theme.mode)
    const messageEl = useRef<HTMLDivElement>(null)

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
                            <div className="rounded-lg my-2 flex justify-start items-center p-3 bg-default-secondary hover:bg-default-secondary-content cursor-pointer">
                                <div className="avatar online mr-3">
                                    <div className="w-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <h1 className="text-xl font-semibold ">
                                    Yakeen Kapali
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral rounded-lg h-5/6 w-3/5 text-default-primary flex flex-col justify-between">
                        <div className="rounded-lg flex justify-start items-center p-3 bg-neutral-content">
                            <div className="avatar mr-3">
                                <div className="w-10 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <h1 className="text-xl font-semibold ">
                                Yakeen Kapali
                            </h1>
                        </div>

                        <div
                            className="flex flex-col p-3 h-full overflow-y-scroll"
                            ref={messageEl}
                        >
                            <ChatBubble message="Sir kata ho?" />
                            <ChatBubble
                                position="end"
                                message="ghar mai ho yar"
                            />
                            <ChatBubble message="Sir kata ho?" />
                            <ChatBubble
                                position="end"
                                message="ghar mai ho yar"
                            />
                            <ChatBubble message="Sir kata ho?" />
                            <ChatBubble
                                position="end"
                                message="ghar mai ho yar"
                            />
                            <ChatBubble message="Sir kata ho?" />
                            <ChatBubble
                                position="end"
                                message="ghar mai ho yar"
                            />
                            <ChatBubble message="Sir kata ho?" />
                            <ChatBubble
                                position="end"
                                message="ghar mai ho yar"
                            />
                            <ChatBubble message="Sir kata ho?" />
                            <ChatBubble
                                position="end"
                                message="ghar mai ho yar"
                            />
                            <ChatBubble message="Sir kata ho?" />
                            <ChatBubble
                                position="end"
                                message="ghar mai ho yar"
                            />
                            <ChatBubble message="Sir kata ho?" />
                            <ChatBubble
                                position="end"
                                message="ghar mai ho yar"
                            />
                            <ChatBubble
                                position="end"
                                message="ghar mai ho yar"
                            />
                        </div>

                        <div className="flex justify-around items-center p-4">
                            <div className="w-full mr-2">
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input w-full focus-visible:outline-0 bg-default-primary text-neutral placeholder:text-neutral"
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <IconButton
                                    type="error"
                                    onClick={() => console.log("send")}
                                >
                                    <IconSend2 size={30} />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
