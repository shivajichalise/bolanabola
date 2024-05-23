import { ReactElement } from "react"

interface LinkProps {
    icon?: ReactElement | null
    text?: string
    href: string
    children?: ReactElement
    className?: string
}

export default LinkProps
