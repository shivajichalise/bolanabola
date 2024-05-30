import ChatBubbleProps from "../types/ChatBubbleProps"

const ChatBubble = (props: ChatBubbleProps) => {
    let chatPosition = ""

    switch (props.position) {
        case "start":
            chatPosition = "chat-start"
            break
        case "end":
            chatPosition = "chat-end"
            break
        default:
            chatPosition = "chat-start"
            break
    }
    return (
        <div className={`chat ${chatPosition}`}>
            <div className="chat-image avatar">
                <div className="w-8 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                </div>
            </div>
            <div className="chat-bubble bg-default-primary">
                {props.message}
            </div>
        </div>
    )
}

export default ChatBubble
