import { ChangeEvent, ReactElement, RefObject } from "react"

interface InputTextProps {
    type: "text" | "email" | "password" | "hidden" | string
    name: string
    id?: string
    placeholder?: string
    hasIcon?: boolean
    icon?: ReactElement
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    ref?: RefObject<HTMLInputElement>
    optional?: false | boolean
}

export default InputTextProps
