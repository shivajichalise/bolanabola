import { Link } from "react-router-dom"
import ButtonProps from "../types/ButtonProps"

const Button = (props: ButtonProps) => {
    let bgColorClass = ""

    switch (props.style) {
        case "primary":
            bgColorClass = "btn-primary"
            break
        case "secondary":
            bgColorClass = "btn-secondary"
            break
        default:
            bgColorClass =
                "bg-default-primary hover:bg-default-primary-content border-0"
            break
    }

    let btnSize = ""

    switch (props.size) {
        case "xs":
            btnSize = "btn-xs"
            break
        case "sm":
            btnSize = "btn-sm"
            break
        case "lg":
            btnSize = "btn-lg"
            break
        case "md":
            btnSize = "btn-md"
            break
        case "xl":
            btnSize = "btn-xl"
            break
        default:
            btnSize = "btn-md"
            break
    }
    const className = `btn ${btnSize} ${bgColorClass} text-text-200 text-sm ${props.className}`

    return props.type === "link" ? (
        <>
            <Link to={props.href!} className={className}>
                {props.isLoading && (
                    <span className="loading loading-spinner loading-xs"></span>
                )}
                {props.hasIcon && props.icon}
                {props.text}
            </Link>
        </>
    ) : (
        <>
            <button type={props.type} className={className}>
                {props.isLoading && (
                    <span className="loading loading-spinner loading-xs"></span>
                )}
                {props.hasIcon && props.icon}
                {props.text}
            </button>
        </>
    )
}

export default Button
