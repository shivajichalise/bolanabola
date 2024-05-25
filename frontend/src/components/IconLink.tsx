import { Link } from "react-router-dom"
import LinkProps from "../types/LinkProps"

const IconLink = (props: LinkProps) => {
    const classes = props.className

    let style = ""

    switch (props.style) {
        case "primary":
            style = "text-primary hover:text-primary-content"
            break
        case "secondary":
            style = "text-secondary hover:text-secondary-content"
            break
        case "neutral":
            style = "text-neutral hover:text-neutral-content"
            break
    }

    return (
        <Link className={`${classes} ${style} p-1`} to={props.href}>
            {props.children}
        </Link>
    )
}

export default IconLink
