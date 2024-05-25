import { ReactElement } from "react"

interface LinkProps {
    style: "primary" | "secondary" | "neutral"
    icon?: ReactElement | null
    text?: string
    href: string
    children?: ReactElement
    className?: string
}

export default LinkProps
