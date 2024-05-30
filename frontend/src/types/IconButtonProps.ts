import { ReactElement } from "react"

interface IconButtonProps {
    icon?: ReactElement | null
    type: "primary" | "secondary" | "accent" | "error" | "warning" | "info"
    onClick: React.MouseEventHandler<HTMLButtonElement>
    text?: string
    children?: ReactElement
}

export default IconButtonProps
