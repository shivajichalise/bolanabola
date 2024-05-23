import { Link } from "react-router-dom"
import LinkProps from "../types/LinkProps"

const IconLink = (props: LinkProps) => {
    const classes = props.className

    return (
        <Link
            className={`${classes} text-primary hover:text-primary-content p-1`}
            to={props.href}
        >
            {props.children}
        </Link>
    )
}

export default IconLink
