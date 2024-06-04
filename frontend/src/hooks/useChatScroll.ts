import React from "react"

function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
    const ref = React.useRef<HTMLDivElement>(
        null
    ) as React.MutableRefObject<HTMLDivElement>

    React.useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight
        }
    }, [dep])

    return ref
}

export default useChatScroll
