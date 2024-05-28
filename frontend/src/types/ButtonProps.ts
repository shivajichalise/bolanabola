import { ReactElement } from "react"

interface ButtonProps {
    style: "primary" | "secondary" | "default"
    size: "xs" | "sm" | "md" | "lg" | "xl"
    type: "button" | "submit" | "link"
    hasIcon?: boolean
    icon?: ReactElement | null
    text?: string
    href?: string
    className?: string
    isLoading?: boolean
}

export default ButtonProps
