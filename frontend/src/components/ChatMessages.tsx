import ChatMessagesProps from "../types/ChatMessagesProps"
import ChatBubble from "./ChatBubble"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { useEffect, useRef } from "react"

const ChatMessages = (props: ChatMessagesProps) => {
    const { messages } = props
    const user = useSelector((state: RootState) => state.auth.user)
    const messagesContainer = useRef<HTMLDivElement>(null)

    const scroll = () => {
        if (messagesContainer.current) {
            const { offsetHeight, scrollHeight, scrollTop } =
                messagesContainer.current as HTMLDivElement
            if (scrollHeight <= scrollTop + offsetHeight + 100) {
                messagesContainer.current?.scrollTo(0, scrollHeight)
            }
        }
    }

    useEffect(() => {
        scroll()
    }, [messages])

    const scrollToBottom = () => {
        if (messagesContainer.current) {
            const target = messagesContainer.current
            target.scrollIntoView({ block: "end" })
        }
    }

    useEffect(() => {
        scrollToBottom() // Scroll to bottom on component mount
    })

    return (
        <div ref={messagesContainer}>
            {messages.map((message) => (
                <ChatBubble
                    position={message.from_user == user?.id ? "end" : "start"}
                    message={message.message}
                    key={message.id}
                />
            ))}
        </div>
    )
}

export default ChatMessages
